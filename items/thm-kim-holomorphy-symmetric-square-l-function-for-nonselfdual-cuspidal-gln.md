---
id: thm-kim-holomorphy-symmetric-square-l-function-for-nonselfdual-cuspidal-gln
kind: theorem
title: Kim Holomorphy of the Symmetric-Square L-Function for Non-Self-Dual Cuspidal GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-symmetric-power-scalar-twist-and-local-factor-shift
  - lem-unitary-central-norm-character-normalization
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-symmetric-square-l-function-for-gln
  - def-unitary-cuspidal-generic-gln-representation
  - thm-shahidi-symmetric-square-l-functional-equation-for-gln
proof_strategy: global-intertwining-operator
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 3 and its proof, printed pp. 176–177: holomorphy for non-self-contragredient cuspidal representations."
    - title: "H. H. Kim, Langlands–Shahidi Method and Poles of Automorphic L-Functions: Application to Exterior Square L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/814AE4EE91AEA48590C236C086138FAA/S0008414X00008002a.pdf/langlands-shahidi-method-and-poles-of-automorphic-l-functions-application-to-exterior-square-l-functions.pdf"
      locator: "§2, printed p. 839: positive-real-center normalization; Proposition 2.1 supplies an exterior-square normalized-intertwining input, not a complete general symmetric-square proof."
---

## Statement

Let $\pi_0$ be a unitary cuspidal globally generic automorphic representation of
$\mathrm{GL}_n(\mathbb A_{\mathbb Q})$, $n\ge1$, whose central character is
trivial on the positive real scalar center. If $\pi_0\not\simeq\widetilde\pi_0$,
then $\Lambda(s,\pi_0,\operatorname{Sym}^2)$ is entire.

For an arbitrary unitary cuspidal globally generic $\pi$, write uniquely
$\pi=\pi_0\otimes|\det|^{it}$ with this normalization and $t\in\mathbb R$.
With the standard local parameter conventions, the full unitary family obeys
$$
\Lambda(s,\pi,\operatorname{Sym}^2) =\Lambda(s+2it,\pi_0,\operatorname{Sym}^2).
$$
Thus normalized non-self-duality implies entireness for every imaginary shift.
The normalized self-dual branch, including essentially self-dual imaginary
shifts, retains the meromorphic-continuation and functional-equation target;
entireness is not asserted for that branch. The global analytic assertions
in both branches remain local proof obligations.

## Statement references

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[H. H. Kim, *Langlands–Shahidi Method and Poles of Automorphic L-Functions: Application to Exterior Square L-Functions*](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/814AE4EE91AEA48590C236C086138FAA/S0008414X00008002a.pdf/langlands-shahidi-method-and-poles-of-automorphic-l-functions-application-to-exterior-square-l-functions.pdf)

## Proof status

Kim's Appendix 2, Proposition 3 invokes [Ki1]. Kim 1999 §2 explicitly normalizes
the positive-real central character before its intertwining argument. The
previous unnormalized literal statement was false: for $n=1$ and $t\ne0$,
$\pi=|\cdot|_{\mathbb A}^{it}$ is unitary, cuspidal and generic, and is not
self-contragredient, but its completed symmetric-square function is the
completed zeta function at $s+2it$, with poles at $1-2it$ and $-2it$.
The authentic previous body and source-normalization evidence are preserved
in the run's Selberg escalation archive.

The local scalar-twist algebra and central-character normalization are proved
in the two named local helpers. They do not construct local Langlands
parameters or prove compatibility with global automorphic twisting. Kim 1999
addresses exterior-square normalized intertwiners; the symmetric-square
extension, normalized local holomorphy, global Eisenstein continuation and
pole analysis still require complete local proofs. No source theorem is
adopted as an external input. In particular the normalized self-dual branch
has not acquired a locally proved pole classification.
