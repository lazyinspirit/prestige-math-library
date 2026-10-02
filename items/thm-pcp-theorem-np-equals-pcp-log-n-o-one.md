---
id: thm-pcp-theorem-np-equals-pcp-log-n-o-one
kind: theorem
title: "The PCP theorem: NP equals PCP(log n, O(1))"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-gap-csp-is-np-hard
  - lem-two-query-pcps-and-constraint-graphs-are-equivalent
  - def-pcp-class-with-completeness-and-soundness
  - def-np-by-verifiers
  - def-pcp-verifier-randomness-query-and-proof-length
  - def-polynomially-balanced-verifier
  - def-constraint-graph-and-labeling-value
  - lem-rat-embeds-dense
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3 Theorems 1.1, 1.2 and 1.5, printed pp. 2–5"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.1–18.2 (PCP and NP) and §18.5 (proof of the PCP theorem), printed pp. 350–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  repair: research/frontier-37-owner-30-published-repair-evidence/thm-pcp-theorem-np-equals-pcp-log-n-o-one.repair.json
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

$\mathrm{NP}=\operatorname{PCP}(\log n,O(1))$ in the shorthand of
[[def-pcp-class-with-completeness-and-soundness]]: a language
$K\subseteq\{0,1\}^*$ belongs to NP if and only if there are a constant
$s<1$, a bound $r(n)=O(\log n)$ and a constant bound $q$ with
$K\in\operatorname{PCP}(r,q;1,s)$ over the binary proof alphabet. In
particular every language in the class has a verifier with perfect
completeness, soundness at most the fixed constant $s<1$, one fixed
polynomial-length proof per input, $O(\log n)$ random bits and a constant
number of nonadaptive bit queries.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and use the shorthand convention of [[def-pcp-class-with-completeness-and-soundness]] and the fixed $\operatorname{GapCSP}(1,1-\alpha)$ promise problem of [[thm-gap-csp-is-np-hard]].

[F1] Assuming the Axiom of Choice, for every language $L\in\mathrm{NP}$ there is a total function $f_L$, computable by a deterministic polynomial-time algorithm, such that $f_L(x)$ is an explicit binary constraint graph over $\Sigma_\star$ with $\operatorname{val}(f_L(x))\ge1$ for $x\in L$ and $\operatorname{val}(f_L(x))\le1-\alpha$ for $x\notin L$, where $\alpha>0$ is the fixed gap constant. ([[thm-gap-csp-is-np-hard]])

[F2] For every explicit binary constraint multigraph $G$ over a finite alphabet $\Sigma$ with $m\ge1$ edges there is a nonadaptive verifier whose proof is a labeling $\sigma:V(G)\to\Sigma$, which uses exactly $\lceil\log_2m\rceil$ random bits and reads at most two symbols, such that for every fixed labeling $$\Pr[V^\sigma\text{ rejects}]=\frac{m}{2^{\lceil\log_2m\rceil}}\,\operatorname{UNSAT}_\sigma(G)\ge\frac12\operatorname{UNSAT}_\sigma(G);$$ it has perfect completeness on satisfiable graphs, and if $\operatorname{UNSAT}(G)\ge\delta$ then every proof is rejected with probability at least $\delta/2$. ([[lem-two-query-pcps-and-constraint-graphs-are-equivalent]])

[F3] If a binary proof convention is required, encoding each $\Sigma$ symbol by a fixed number of bits changes two symbol queries to a constant number of nonadaptive bit queries without changing the best acceptance probability. ([[lem-two-query-pcps-and-constraint-graphs-are-equivalent]])

[F4] A language $K$ belongs to $\operatorname{PCP}(r,q;c,s)$ exactly when there are a verifier $V$ with randomness bound $r(n)$ and query bound $q(n)$, a fixed finite proof alphabet, and a polynomial $p$ such that its addressable proof length $L_V(n)$ is at most $p(n)$ and: if $x\in K$, there is one fixed proof $\pi$ with $\Pr[V^\pi(x)\text{ accepts}]\ge c$; if $x\notin K$, every fixed proof $\pi$ satisfies $\Pr[V^\pi(x)\text{ accepts}]\le s$. ([[def-pcp-class-with-completeness-and-soundness]])

[F5] In the shorthand $\operatorname{PCP}(\log n,O(1))$ the proof alphabet is $\{0,1\}$, the randomness is $O(\log n)$, the number of bit queries is bounded by a constant, completeness is perfect ($c=1$), and soundness is at most some fixed constant $s<1$. ([[def-pcp-class-with-completeness-and-soundness]])

[F6] For a fixed input $x$ and a fixed proof $\pi$, the acceptance probability is the proportion of the $2^{r(n)}$ coin strings on which $V^\pi(x)$ accepts, and the proof is not resampled when the verifier runs. ([[def-pcp-verifier-randomness-query-and-proof-length]])

[F7] The class NP is the set of languages that admit a polynomial-time verifier with polynomially bounded certificates in the sense of [[def-polynomially-balanced-verifier]]. ([[def-np-by-verifiers]])

[F8] A polynomial-time verifier with polynomially bounded certificates for $L$ consists of a relation $R$ whose paired language $L_R=\{\langle x,u\rangle:(x,u)\in R\}$ belongs to $P$ and a polynomial $p$ with $x\in L$ if and only if there is $u$ with $\lvert u\rvert\le p(\lvert x\rvert)$ and $(x,u)\in R$. ([[def-polynomially-balanced-verifier]])

[F9] For a labeling $\sigma$ of a binary constraint graph $G$ with $E(G)\ne \varnothing$, $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied, and the definitions give $\operatorname{UNSAT}(G)=1-\operatorname{val}(G)$ with $\operatorname{val}(G)=\max_\sigma\operatorname{val}_\sigma(G)$. ([[def-constraint-graph-and-labeling-value]])

[F10] Between any two real numbers lies a rational ([[lem-rat-embeds-dense]]).

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]), supplying the premise of the gap-CSP theorem [F1] in the NP-to-PCP inclusion.

## Proof

**Given:** Assume the Axiom of Choice and use the shorthand class convention of [F5] and the fixed gap problem [F1].

1.1 Suppose $K\in\operatorname{PCP}(\log n,O(1))$. By [F4] and [F5] there are a constant $s<1$, bounds $r(n)=O(\log n)$ and $q(n)=O(1)$, a verifier $V$ with binary proof alphabet, and an integer-valued polynomial $p$ with $L_V(n)\le p(n)$ such that on every input $x$ of length $n$: if $x\in K$ some fixed proof is accepted with probability at least $1$, and if $x\notin K$ every fixed proof is accepted with probability at most $s$. Fix once and for all a rational constant $s'$ with $s<s'<1$; [F10] supplies one, and the certificate machine can hardcode it without computing $s$. Use the same query algorithm on proofs of length $p(n)$; its query locations remain in $[L_V(n)]\subseteq[p(n)]$, so the added suffix is never read. Call this fixed-length interface $\widehat V$. Define the binary relation $$R:=\{(x,\pi): \lvert\pi\rvert=p(\lvert x\rvert)\text{ and }\Pr[\widehat V^\pi(x)\text{ accepts}]>s'\}.$$ Thus every invocation in the relation has a valid fixed-length proof string. [F4, F5, F10, given, construct]

1.2 Under [A1], suppose $L\in\mathrm{NP}$ and fix the reduction $f_L$ of [F1]. For an input $x$ of length $n$ put $G_x:=f_L(x)$ and $M:=\lvert E(G_x)\rvert$; then $x\in L$ implies $\operatorname{val}(G_x)\ge1$ and $x\notin L$ implies $\operatorname{val}(G_x)\le1-\alpha$, and $G_x$ together with its explicit encoding is computable in deterministic polynomial time in $n$, so $M\le\mathrm{poly}(n)$ and the encoding length of $G_x$ is $\mathrm{poly}(n)$. [A1, F1, given]

2.1 The paired language $L_R=\{\langle x,\pi\rangle:(x,\pi)\in R\}$ belongs to $P$: a deterministic machine checks $\lvert\pi\rvert=p(\lvert x\rvert)$, enumerates the $2^{r(n)}$ coin strings of $\widehat V$ on $x$ (there are $2^{O(\log n)}=\mathrm{poly}(n)$ of them), simulates $\widehat V^\pi(x)$ deterministically on each, counts the accepting runs, and compares the exact rational acceptance probability with the fixed rational $s'$ by integer arithmetic. [F6, step 1.1, algebra]

2.2 If $M=0$ define the verifier $V_0$ that makes no queries and accepts on every coin string: it has perfect completeness, and it is used only when $\operatorname{val}(G_x)=1$, which by [F9] is the value of an edgeless graph and by step 1.2 forces $x\in L$ (otherwise $\operatorname{val}(G_x)\le1-\alpha<1$), so its soundness clause is vacuous. [F1, F9, step 1.2]

2.3 If $M\ge1$, apply [F2] to the graph $G_x$ over the alphabet $\Sigma_\star$ and then the binary encoding of [F3] with a fixed $7$-bit code for the $66$ symbols of $\Sigma_\star$. This yields a nonadaptive verifier $V_x$ whose proof is the concatenation of the $7$-bit blocks of a vertex labelling, which uses exactly $\lceil\log_2M\rceil=O(\log n)$ random bits by step 1.2, reads at most two $7$-bit blocks, that is at most $14$ bit queries, and whose proof length is $7\lvert V(G_x)\rvert=\mathrm{poly}(n)$ because the explicit encoding of $G_x$ has polynomial length. [F1, F2, F3, step 1.2, algebra]

3.1 By step 2.1 and [F7] it remains to verify the certificate condition of [F8] for $R$. If $x\in K$, pad its fixed $L_V(n)$-bit completeness proof to length $p(n)$; $\widehat V$ ignores the padding, so this proof has acceptance probability at least $1>s'$ and belongs to $R$. Conversely, if $(x,\pi)\in R$, the original verifier's queries are all in $[L_V(n)]$, so the prefix of $\pi$ of length $L_V(n)$ is an original fixed proof with the same acceptance probability. If $x\notin K$, soundness would bound that probability by $s<s'$, contrary to membership in $R$. The certificate length is exactly $p(\lvert x\rvert)$, hence at most $p(\lvert x\rvert)$, so $K\in\mathrm{NP}$ by [F7] and [F8]. [F4, F7, F8, step 1.1, step 2.1, algebra]

3.2 Completeness for $L$: if $x\in L$ then $\operatorname{val}(G_x)\ge1$. For $M=0$ the verifier of step 2.2 accepts every coin string, so its one fixed proof is accepted with probability $1$. For $M\ge1$, [F2] gives a labelling satisfying all $M$ edges, whose $7$-bit encoding is a fixed binary proof accepted with probability $1$ by the verifier of step 2.3, the binary encoding of [F3] preserving the acceptance probability. [F2, F3, F9, step 1.2, step 2.2, step 2.3]

3.3 Soundness for $L$: if $x\notin L$ then step 1.2 and [F9] give $\operatorname{UNSAT}(G_x)\ge\alpha$, so $M\ge1$ and the verifier of step 2.3 is used. Fix any binary proof $\pi$ of the verifier's addressable length $7|V(G_x)|$. Decode every consecutive $7$-bit block by the fixed surjection $D:\{0,1\}^7\to\Sigma_\star$ from [F3]; this gives a full graph labeling $\sigma$. Each real-edge index is accepted exactly when its edge relation is satisfied by $\sigma$, so the number $S$ of accepted indices satisfies $S\le M\operatorname{val}(G_x)\le M(1-\alpha)$. The verifier accepts the $2^{\lceil\log_2M\rceil}-M$ surplus indices, so $$\Pr[V_x^\pi(x)\text{ accepts}]\le\frac{2^{\lceil\log_2M\rceil}-M+M(1-\alpha)}{2^{\lceil\log_2M\rceil}}\le1-\tfrac{\alpha}{2},$$ because $M/2^{\lceil\log_2M\rceil}\ge1/2$. Hence every fixed binary proof is accepted with probability at most $1-\alpha/2<1$. [F2, F3, F9, step 1.2, step 2.3, algebra]

4.1 Steps 2.2, 2.3, 3.2 and 3.3 exhibit, for the arbitrary language $L\in\mathrm{NP}$, a uniform deterministic polynomial-time verifier computing $G_x$ and then running the described test, with $O(\log n)$ random bits, a constant number of nonadaptive bit queries, binary proof alphabet, polynomial addressable proof length, perfect completeness and soundness at most $s:=1-\alpha/2<1$. By [F4] and [F5], $L\in\operatorname{PCP}(r,q;1,s)$ for $r(n)=O(\log n)$ and constant $q$, hence $L\in\operatorname{PCP}(\log n,O(1))$; $L$ was arbitrary, so $\mathrm{NP}\subseteq\operatorname{PCP}(\log n,O(1))$. [F4, F5, step 1.2, step 2.2, step 2.3, step 3.2, step 3.3]

5.1 Step 3.1 gives $\operatorname{PCP}(\log n,O(1))\subseteq\mathrm{NP}$ and step 4.1 gives the reverse inclusion, so $\mathrm{NP}=\operatorname{PCP}(\log n,O(1))$ in the shorthand sense, with perfect completeness, constant soundness below one, one fixed polynomial-length proof per input, $O(\log n)$ random bits and a constant number of nonadaptive bit queries. [step 3.1, step 4.1] ∎

## Remarks

The two inclusions use different faces of the same gap: soundness of the fixed-alphabet gap problem supplies the constant rejection probability $\alpha/2$ for a randomly sampled constraint, while the enumeration of the $2^{O(\log n)}$ coin strings turns any PCP verifier into a polynomial-time certificate checker. Both quantifications are over one fixed proof: the verifier never resamples the proof, and the NP machine guesses it once. The gap problem is the one produced by the Dinur transformation of [[thm-gap-csp-is-np-hard]], so its Axiom of Choice premise is carried into the NP-to-PCP inclusion. The reduction, sampled edge and guessed certificate are explicit finite objects; the Choice premise is inherited from the supplied gap-CSP proof route through expander spectral theory and algebraic embedding extension. This is a statement about the current library argument, not an intrinsic necessity claim for the PCP theorem.
