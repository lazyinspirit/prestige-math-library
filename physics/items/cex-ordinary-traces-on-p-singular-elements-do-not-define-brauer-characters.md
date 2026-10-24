---
id: cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters
kind: counterexample
title: "Ordinary traces on p-singular elements are not determined by reduction"
status: published
origin: pipeline
deps: [lem-modular-trace-depends-only-on-the-p-regular-part, def-lifted-modular-trace-on-p-regular-elements]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
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

## Statement refuted

False claim: the reduction of an integral representation determines its characteristic-zero character on every group element, including p-singular elements. Also false: equality of modular traces at g and its p-regular part implies equality of their operators.

## Facts & Assumptions

**Given:** A fixed splitting 2-modular system for C2 with generator t.

[F1] The Brauer character is defined on p-regular elements ([[def-lifted-modular-trace-on-p-regular-elements]]).

[F2] The trace agrees with that at the p-regular part ([[lem-modular-trace-depends-only-on-the-p-regular-part]]).

## Counterexample

1.1 Take the rank-one lattices $L_+=\mathcal O$ and $L_-=\mathcal O$ with t acting by 1 and -1. These are representations since both scalars square to 1. Their reductions are both the trivial k-module because $-1=1$ in characteristic two. Their K-character values at t are 1 and -1, different because K has characteristic zero. The element t has order 2 and is p-singular, so this does not conflict with the domain of the Brauer character. [F1, given, algebra]

2.1 On $k^2$ take $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Then $J^2=I$ in characteristic two, $J\ne I$, and $\operatorname{tr}(J)=0=\operatorname{tr}(I)$. The p-regular part of t is 1. Thus the trace equality holds exactly as stated in the trace lemma while equality of operators fails. Both proposed conclusions have explicit counterexamples. [F2, step 1.1, algebra] ∎
