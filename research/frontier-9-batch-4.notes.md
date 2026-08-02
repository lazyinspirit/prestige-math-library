# Frontier 9 batch 4 — source and authoring ledger

Scope: further trigonometric identities and inverse functions, followed by the
Euclidean inverse and implicit function theorems. This is draft-only authoring
in the linked `build-foundations-ab-pairs` worktree.

## Authored core

- Principal inverse sine, cosine, and tangent, including their branch choices,
  derivative formulae, the integral and series formula for arctangent, and a
  Machin-formula calculation.
- Boundary counterexamples: $arcsin(\sin x)$ is not globally $x$, and the
  principal arcsine is not differentiable at its endpoints.
- The local contraction lemma, Euclidean inverse function theorem, and
  Euclidean implicit function theorem with derivative formula.
- Local unit-circle graphing and the two counterexamples isolating global
  injectivity and the $C^1$ hypothesis.

## Sources checked

- [NIST Digital Library of Mathematical Functions, §§4.23–4.24](https://dlmf.nist.gov/4.24)
  for the inverse-trigonometric conventions and formulae.
- [J. Lebl, *Basic Analysis II*, §8.5](https://www.jirka.org/ra/html/sec_svinvfuncthm.html)
  for the inverse and implicit function theorems and the local hypotheses.

## Boundary record

The arctangent proof distinguishes $|x|<1$ from the endpoint $x=1$; the
implicit theorem is local rather than a global inverse claim; and each
counterexample uses an explicit witness. The exact proof-bearing scope and its
fact/step/boundary maps are in `frontier-9-batch-4.proof-contracts.json`.
