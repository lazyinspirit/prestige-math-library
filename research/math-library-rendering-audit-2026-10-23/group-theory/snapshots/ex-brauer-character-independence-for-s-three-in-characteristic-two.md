---
id: ex-brauer-character-independence-for-s-three-in-characteristic-two
kind: example
title: "The Brauer table of S3 in characteristic two"
status: published
origin: pipeline
deps: [thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements, lem-modular-trace-depends-only-on-the-p-regular-part, def-lifted-modular-trace-on-p-regular-elements]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

In a splitting $2$-modular system for $S_3$, the trivial module and the natural two-dimensional module have Brauer rows $(1,1)$ and $(2,-1)$ on the classes of $1$ and $(123)$; these exhaust the simple modules.

## Facts & Assumptions

**Given:** A splitting 2-modular system, with the matrices over the prime field embedded in k.

[F1] Lift the eigenvalues individually to obtain Brauer values ([[def-lifted-modular-trace-on-p-regular-elements]]).

[F2] Distinct simple Brauer characters are independent on p-regular conjugacy classes ([[thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements]]).

## Verification

1.1 Set $r=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ and $t=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct multiplication gives $r^2=\begin{pmatrix}1&1\\1&0\end{pmatrix}$, $r^3=t^2=I$, and $trt=r^2$. The six matrices $I,r,r^2,t,rt,r^2t$ are distinct. Acting on the three nonzero vectors of $\mathbb F_2^2$ embeds this group in $S_3$; its size six identifies it with $S_3$. [given, algebra]

2.1 The polynomial of r is $X^2+X+1$, with distinct nontrivial cube roots $\lambda,\lambda^2$ in k. An invariant line for r must be one of its eigenlines. From $rt=tr^{-1}$, t sends the $\lambda$-eigenline to the $\lambda^{-1}$-eigenline, which is different. Hence no line is invariant under both; the two-dimensional representation is simple, and the same argument holds over every extension field. [step 1.1, F1, algebra]

3.1 Writing $\zeta=\widehat\lambda$, the identity has value 2 and r has value $\zeta+\zeta^2=-1$, since $\zeta^3=1$ and $\zeta\ne1$. The trivial representation has values 1,1. Thus the determinant is $-1-2=-3$, nonzero in K and with residue 1 in k. [F1, step 2.1, algebra]

4.1 The p-regular permutations are the identity and the two conjugate 3-cycles, hence give exactly two classes. By independence at most two nonisomorphic simple modules can have characters on this two-dimensional space of class functions. The two already exhibited are nonisomorphic by dimension and simple, so exhaust the possibilities. [F2, step 2.1, step 3.1, algebra] ∎
