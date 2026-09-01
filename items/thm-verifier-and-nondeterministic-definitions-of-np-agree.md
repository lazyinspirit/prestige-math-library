---
id: thm-verifier-and-nondeterministic-definitions-of-np-agree
kind: theorem
title: "The verifier and nondeterministic definitions of NP agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-by-verifiers, def-dtime-ntime-dspace-and-nspace, lem-time-at-least-input-length-permits-complete-input-reading]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.toronto.edu/~sacook/homepage/1971.pdf"
---

## Statement

For a language $L\subseteq\{0,1\}^*$, the following are equivalent:

1. $L\in NP$ in the verifier sense of [[def-np-by-verifiers]].
2. There exists $k\ge 1$ such that $L\in\operatorname{NTIME}(n^k)$.

## Facts & Assumptions

**Given:** A language $L\subseteq\{0,1\}^*$.

[L1] $L\in NP$ means that $L$ has a polynomial-time verifier with polynomially bounded certificates, by [[def-np-by-verifiers]].

[L2] $L\in\operatorname{NTIME}(n^k)$ means that some nondeterministic Turing machine accepts exactly the words of $L$ and every branch halts within $O(n^k)$ steps, by [[def-dtime-ntime-dspace-and-nspace]].

[L3] A machine that fully reads every input of length $n$ needs at least linear time, by [[lem-time-at-least-input-length-permits-complete-input-reading]].

## Proof

**Proof technique:** direct.

1.1 Assume item 1. By [L1], choose a verifier relation $R$ and a polynomial certificate bound $p$. Let $D_R$ be a deterministic polynomial-time decider for the paired language $L_R=\{\langle x,u\rangle:(x,u)\in R\}$. Build a nondeterministic machine $N$ that, on input $x$, first guesses a binary word $u$ of length at most $p(|x|)$ and then runs $D_R$ on $\langle x,u\rangle$, accepting exactly when $D_R$ accepts. Because every branch chooses at most $p(|x|)$ guessed bits and then performs one polynomial-time deterministic verification, every branch halts within polynomial time. Since $x\in L$ exactly when some certificate $u$ makes $(x,u)\in R$, the machine $N$ accepts exactly the words of $L$. Thus item 2 holds. [L1, L2, given, construct]

1.2 Assume item 2. By [L2], fix a nondeterministic machine $N$ and an exponent $k$ such that every branch on inputs of length $n$ halts within $cn^k$ steps for some constant $c$. Let $b$ be the maximum number of available nondeterministic choices in any one local configuration of $N$, and choose an integer $r\ge 1$ with $2^r\ge b$. An accepting branch is then determined by a finite sequence $d_1,\dots,d_t$ of at most $cn^k$ choice numbers from $\{0,\dots,b-1\}$. Encode that sequence as the binary word $$ u:=1^t0\beta_1\cdots\beta_t, $$ where each $\beta_i$ is the $r$-bit binary expansion of $d_i$. The initial unary header recovers $t$, and then the decoder reads exactly $t$ consecutive blocks of length $r$, so this branch description is effectively decodable. [L2, given, construct]

2.1 Define a deterministic verifier for $L$ as follows. On input $\langle x,u\rangle$, first decode $u$ by reading its unary header and then the declared number of $r$-bit choice blocks; reject malformed encodings. Next simulate $N$ on $x$ while forcing those choices in order, reject if the certificate requests a nonexistent choice or ends before acceptance, and accept exactly when the forced run ends in an accepting state after consuming the full encoded branch description. Step 1.2 guarantees that $x\in L$ yields some accepting-branch certificate, and any accepting certificate describes a genuine accepting branch. The certificate length is polynomial in $|x|$ because it has one unary header bit per simulated choice and each choice uses the fixed block length $r$, with at most $cn^k$ choices. The verifier runtime is therefore polynomial in $|x|+|u|$ because it only decodes $u$ and replays that many steps of $N$. Therefore item 1 holds by [L1]. [L1, L2, step 1.2, construct]

3.1 Steps 1.1 and 2.1 prove both directions, so the verifier and nondeterministic definitions of NP agree. The lower bound in [L3] is compatible with these polynomial bounds: reading the whole input and certificate is already only linear in their lengths. [L3, step 1.1, step 2.1] ∎
