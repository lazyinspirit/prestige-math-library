---
id: rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel
kind: remark
title: Surjectivity alone does not imply a complemented kernel
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-regular-value-theorem-for-banach-manifolds, thm-bounded-right-inverse-iff-kernel-is-complemented, cor-finite-dimensional-subspaces-are-complemented, def-dependent-choice, def-axiom-of-choice, def-complemented-subspace, cor-finite-codimensional-subspaces-are-complemented, def-fredholm-operator-cokernel-and-index]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11 (regular values as onto with complemented kernel)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Remarks

The regular value theorem of this page
([[thm-regular-value-theorem-for-banach-manifolds]]) separately requires the
specified atlas of the domain manifold to be maximal and assumes that at every
point of the level set the derivative is surjective **with complemented kernel**
([[def-complemented-subspace]]). For general Banach spaces the second clause is
not a consequence of the first, and it cannot be dropped:

- **Equivalent formulation.** Assume the Axiom of Dependent Choice
  ([[def-dependent-choice]]). For a surjective bounded linear operator
  $L : X \to Y$ between Banach spaces, $\ker L$ is complemented in $X$ if and
  only if $L$ admits a bounded right inverse
  ([[thm-bounded-right-inverse-iff-kernel-is-complemented]]). Thus the
  hypothesis of the regular value theorem is exactly the requirement that the
  derivative admit a bounded right inverse along the level set.

- **Why surjectivity by itself is not enough, and where the failure is seen.**
  The open mapping theorem makes $L$ open, but it does not supply a bounded
  **linear** right inverse. Without one, the fibres of the linear map are affine
  translates of a closed uncomplemented subspace and cannot be the split
  coordinate slices demanded by [[def-split-banach-submanifold]]. The companion
  page carries the
  standard witness: $c_0$ is a closed subspace of $\ell^\infty$ that is not
  complemented in it, so the identity chart has no split-coordinate
  decomposition for the pair $(\ell^\infty,c_0)$. Because $\ell^\infty$ is not
  second countable, this is a Banach-space obstruction and **not** a
  counterexample involving a Banach manifold under this library's convention.
  It shows why complementability is a genuine extra linear hypothesis; it does
  not by itself exhibit a regular level set in the manifold category.

- **Automatic cases, and the ones that matter below.** A closed subspace that is
  finite dimensional or of finite codimension is automatically complemented
  ([[cor-finite-dimensional-subspaces-are-complemented]],
  [[cor-finite-codimensional-subspaces-are-complemented]]). In particular, if
  $L$ is a Fredholm operator ([[def-fredholm-operator-cokernel-and-index]]) or
  if its target is finite dimensional, then surjectivity of $L$ implies that
  $\ker L$ is complemented, so the extra clause of the theorem is automatic in
  those cases. This is why the Fredholm-and-transversality results of this page
  can print the complemented-kernel hypothesis once and use it everywhere
  without further case distinctions, while the abstract theorem states it
  outright.

- **Bookkeeping.** The equivalence in the first bullet is a Dependent Choice
  theorem, and the regular value theorem is proved under the Axiom of Choice
  ([[def-axiom-of-choice]]), which supplies DC; it also has the independent
  structural hypothesis that the specified domain atlas is maximal. The
  counterexample on the companion page uses only the Axiom of Countable Choice,
  since the non-complementation it appeals to is proved at that strength.
