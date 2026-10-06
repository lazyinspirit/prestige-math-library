---
id: def-inversion-set-of-a-weyl-group-element
kind: definition
title: "The inversion set of a Weyl group element"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-length-and-longest-element-of-a-finite-weyl-group, prop-weyl-length-equals-positive-root-inversion-number, lem-finite-weyl-strong-exchange-and-deletion, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-positive-system-and-base-of-simple-roots, def-weyl-vector-rho-for-a-chosen-positive-system, def-root-reflections-and-the-weyl-group-action, thm-the-root-set-is-a-reduced-crystallographic-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roe Goodman and Nolan Wallach, Symmetry, Representations, and Invariants, GTM 255, Appendix E: Cohomology and Character Formulas, §E.2.1–§E.2.6, printed pp.17–30"
      url: "https://sites.math.rutgers.edu/~goodman/pub/symmetry/appe.pdf"
      locator: "§E.2.2, printed pp.21–24, inversion sets Q(w), Lemmas E.2.5–E.2.6; the convention here is Phi_w=Q(w^{-1})"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: '§3.4, printed pp.73–75, the set $\Phi^+(w)$ and Lemma 3.4.3'
---

## Definition

Let $\Phi$ be a reduced crystallographic root system with positive system
$\Phi^+$ and Weyl group $W$. The standing conventions are those of
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]] and
[[def-positive-system-and-base-of-simple-roots]]: $\Phi^+$ is the positive
system attached to a chamber, each $w\in W$ permutes $\Phi$ and acts on the
ambient Euclidean space, and $\ell$ is the length function of
[[def-length-and-longest-element-of-a-finite-weyl-group]], which is also the
minimal word length in simple reflections
([[prop-weyl-length-equals-positive-root-inversion-number]]). The Lie-algebraic
realization of the same Weyl action is the one of
[[def-root-reflections-and-the-weyl-group-action]] inside
[[thm-the-root-set-is-a-reduced-crystallographic-root-system]]. Throughout,
$\rho$ denotes the Weyl vector of [[def-weyl-vector-rho-for-a-chosen-positive-system]].

**The inversion set.** For $w\in W$ put

$$\Phi_w=\{\alpha\in\Phi^+:w^{-1}\alpha<0\}.$$

This is the set that indexes the exterior root covectors of the extremal
cochains constructed from this page. It is computed from the inverse action,
not from the action of $w$ itself.

**Identification with the published inversion sets.** The published inversion
set of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
written $N(w)$ in [[def-length-and-longest-element-of-a-finite-weyl-group]], is
$$\operatorname{Inv}(w)=N(w)=\{\alpha\in\Phi^+:w\alpha\in\Phi^-\},$$
that is, the positive roots sent by $w$ itself to negative roots. With this
convention
$$\Phi_w=\operatorname{Inv}(w^{-1})=N(w^{-1}),$$
since $w^{-1}\alpha\in\Phi^-$ says exactly that $\alpha$ is a positive root sent
by $w^{-1}$ to a negative root. Consequently, by the identification of length
with inversion number and the equality of the lengths of inverse elements,
$$|\Phi_w|=|\operatorname{Inv}(w^{-1})|=\ell(w^{-1})=\ell(w).$$
The middle equality is the definition $\ell(v)=|N(v)|$ of
[[def-length-and-longest-element-of-a-finite-weyl-group]]; the last equality
holds because reversing an expression of $w$ in simple reflections expresses
$w^{-1}$ with the same number of letters, so the minimal word lengths agree,
and both equal the inversion numbers
([[prop-weyl-length-equals-positive-root-inversion-number]];
[[lem-finite-weyl-strong-exchange-and-deletion]], which states that word
length equals inversion length for these simple reflections).

**Extremal values and the half-sum identity.** For the unit $1\in W$ nothing is
inverted, $\Phi_1=\varnothing$; for the longest element $w_0$, whose existence
and uniqueness are proved in
[[prop-weyl-length-equals-positive-root-inversion-number]] and which satisfies
$w_0(\Phi^+)=\Phi^-$, one has $w_0^{-1}(\Phi^+)=\Phi^-$ and hence
$\Phi_{w_0}=\Phi^+$. Moreover
$$\sum_{\alpha\in\Phi_w}\alpha=\rho-w\rho .$$
Indeed, $w\Phi^+=\{\beta\in\Phi:w^{-1}\beta\in\Phi^+\}$, and this set is the
disjoint union of the positive roots with $w^{-1}\alpha>0$ and the negatives of
the roots in $\Phi_w$: a root $\beta$ with $w^{-1}\beta>0$ is either positive,
or of the form $-\alpha$ with $\alpha\in\Phi_w$, and no other possibility
occurs. Since $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$ and
$w\rho=\tfrac12\sum_{\beta\in w\Phi^+}\beta$, the difference is
$$\rho-w\rho=\tfrac12\Bigl(\sum_{\alpha\in\Phi^+}\alpha-\sum_{\alpha:w^{-1}\alpha>0}\alpha+\sum_{\alpha\in\Phi_w}\alpha\Bigr)=\tfrac12\Bigl(\sum_{\alpha\in\Phi_w}\alpha+\sum_{\alpha\in\Phi_w}\alpha\Bigr)=\sum_{\alpha\in\Phi_w}\alpha .$$
The first sum is over all positive roots, the second over the positive roots
with $w^{-1}\alpha>0$, and their difference is the sum over $\Phi_w$. This
identity is the sign-normalized half-sum statement used, in the form
$\sum_{\alpha\in\Phi_w}\alpha=\rho-w\rho$, in the extremal-cochain lemma below.
