---
id: ex-ip-can-be-given-perfect-completeness
kind: example
title: "Perfect completeness through a TQBF reduction"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-ip-can-be-given-perfect-completeness, thm-tqbf-has-a-polynomial-round-interactive-proof, def-shamir-protocol-for-tqbf, lem-efficient-prime-field-for-a-polynomial-soundness-budget, lem-total-soundness-follows-by-union-bound, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Example

Take the IP language $L=\mathrm{TQBF}$ with the identity reduction, so that an input is already a quantified Boolean formula, and take the true instance
$$\Phi=\exists x\,(x),\qquad b(X)=X,$$
for which $n=1$, the matrix has $L=1$ syntax node, $D=2$ and $T=2$. The protocol parameters of [[def-shamir-protocol-for-tqbf]] are $N=\max\{2,12TD+1\}=49$ and $p=53$, the first admissible integer above $49$, so the field is $\mathbb Z/53$. Running the honest prover, in the round for $E_X$ it sends the message $T\mapsto T$ and in the round for $R_X$ it again sends $T\mapsto T$; for arbitrary challenges $r,r'\in\mathbb Z/53$ both verifier tests pass, the claim chain is $1\to r\to r'$, and the terminal comparison is $b(r')=r'$. Hence the honest prover is accepted on every random tape, which is perfect completeness on this instance.

## Facts & Assumptions

**Given:** The language TQBF with the identity reduction, the true instance $\Phi=\exists x\,(x)$, and an arbitrary pair of challenges $r,r'$ in the field chosen by the protocol.

[A1] Every language in IP has an interactive proof with perfect completeness and soundness error at most $1/3$, obtained by moving the language into PSPACE and using the TQBF reduction protocol ([[thm-ip-can-be-given-perfect-completeness]]).

[A2] TQBF has such a protocol: on true inputs the honest prover is accepted with probability one, on false inputs every prover is accepted with probability at most $2TD/p<1/3$, and TQBF lies in IP ([[thm-tqbf-has-a-polynomial-round-interactive-proof]], [[lem-total-soundness-follows-by-union-bound]]).

[A3] For a formula with $n$ variables and $L$ matrix nodes the protocol uses $T=n(n+3)/2$, $D=\max\{L,2\}$, $N=\max\{2,12TD+1\}$ and the first admissible integer in $(N,2N)$, which is prime; messages are coefficient lists of degree at most $D$, the claim starts at $1$, the verifier tests $c=s(0)s(1)$, $c=s(0)+s(1)-s(0)s(1)$ or $c=(1-a)s(0)+a\,s(1)$ according to the node, samples a fresh challenge after the message, sets $c:=s(r)$, and accepts exactly when $c=b(\sigma)$ ([[def-shamir-protocol-for-tqbf]], [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]).

[A4] The classes of $\mathbb Z/53$ and of $\mathbb Z/101$ form fields, so each nonzero residue has an inverse and the arithmetic below is modular ([[thm-z-mod-p-is-a-field]]).



## Verification

1.1 For $\Phi=\exists x\,(x)$ we have $n=1$, $L=1$, hence $D=\max\{1,2\}=2$ and $T=1\cdot4/2=2$; then $N=\max\{2,12\cdot2\cdot2+1\}=49$, and the integers $50,51,52$ are inadmissible because $50=2\cdot25$, $51=3\cdot17$ and $52=2\cdot26$ have divisors at most $49$, so the first admissible integer is $p=53$, which is prime by [A3]. [A3, algebra]

1.2 The operator list of $\Phi$ is $R_X,E_X$, so the stage polynomials are $G_0=b=X$, $G_1=R_XX=(1-X)\cdot0+X\cdot1=X$ and $G_2=E_XX=1-(1-0)(1-1)=1$; the last value is the truth value of the true formula $\Phi$, and the protocol processes the nodes in the reverse order $E_X$, then $R_X$. [A3, given, algebra]

2.1 In the round for $E_X$ the claim is $c=1$ and the honest message is the restriction of $G_1$, namely $s(T)=T$. The existential test reads $s(0)+s(1)-s(0)s(1)=0+1-0=1=c$, so it passes; the verifier then draws its challenge $r$, sets $\sigma(x)=r$ and $c=s(r)=r$. [A3, step 1.2, algebra]

3.1 In the round for $R_X$ the current value of the reduced variable is $a=\sigma(x)=r$ and the honest message is the restriction of $G_0$, again $s(T)=T$. The reduction test reads $(1-a)s(0)+a\,s(1)=(1-r)\cdot0+r\cdot1=r=c$, so it passes; the verifier draws a fresh challenge $r'$, sets $\sigma(x)=r'$ and $c=s(r')=r'$. [A3, step 2.1, algebra]

4.1 The terminal comparison is $c=b(\sigma)=r'$, which holds; so for every pair $(r,r')$ of challenges the honest prover is accepted, and since the challenges range over all of $\mathbb Z/53\times\mathbb Z/53$ the acceptance probability is $1$. This is an instance of the perfect completeness asserted in [A1] and [A2]. [A2, A3, step 3.1, A4]

5.1 For contrast, the false instance $\Phi'=\exists x\,(x\land\neg x)$ has matrix $X(1-X)$ with $L=4$ syntax nodes, so $D=4$, $T=2$, $N=97$ and the protocol prime is $101$; the soundness bound of [A2] evaluates there as $2TD/p=16/101<1/3$. This numerical evaluation quotes the theorem's bound and does not reprove soundness. [A2, A4, algebra] ∎
