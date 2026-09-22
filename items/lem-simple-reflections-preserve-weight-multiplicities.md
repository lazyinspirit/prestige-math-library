---
id: lem-simple-reflections-preserve-weight-multiplicities
kind: lemma
title: Simple reflections preserve weight multiplicities
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weight-and-weight-space-of-a-lie-algebra-representation, thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, thm-finite-dimensional-representations-of-sl-two, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-positive-system-and-base-of-simple-roots, def-weyl-group-of-a-root-system, def-root-reflection-from-a-coroot, prop-weyl-length-equals-positive-root-inversion-number, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Theorem 5.5(e) and Chapter V §1"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and root system
$\Phi$, choose a positive system $\Phi^+$ with base
$\Delta=\{\alpha_1,\ldots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]]), let $V$ be a
finite-dimensional representation of $\mathfrak g$, and let $W$ be the Weyl
group of $\Phi$, acting on $\mathfrak h^*$ by
complex-linear extension of its action on $E=\operatorname{span}_{\mathbb R}\Phi$
([[def-weyl-group-of-a-root-system]],
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
Then for every simple root $\alpha_i$ and every $\mu\in\mathfrak h^*$
$$\dim V_\mu=\dim V_{s_i(\mu)},\qquad s_i(\mu)=\mu-\mu(h_{\alpha_i})\alpha_i ,$$
and consequently $\dim V_{w\mu}=\dim V_\mu$ for every $w\in W$ and every
$\mu\in\mathfrak h^*$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h,\Phi$, the chosen positive system $\Phi^+$ with simple roots $\Delta$, a finite-dimensional representation $V$, and the Weyl group $W$ acting on $\mathfrak h^*$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying [L1] and the abstract root-system identification [L4] ([[def-axiom-of-choice]]).

[L1] For every root $\alpha$ the coroot $h_\alpha$ and suitable $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ form a copy of $\mathfrak{sl}_2$ with $[e_\alpha,f_\alpha]=h_\alpha$; moreover $\alpha(h_\alpha)=2$ and $s_\alpha(\mu)=\mu-\mu(h_\alpha)\alpha$ is the reflection of [[def-root-reflection-from-a-coroot]] ([[thm-root-sl-two-triple]], [[def-coroot-of-a-lie-algebra-root]]).

[L2] A finite-dimensional $\mathfrak{sl}_2$-module is a direct sum of irreducible submodules, and on each irreducible summand the operators $e$ and $f$ move along a finite weight string; in particular they act nilpotently ([[thm-finite-dimensional-representations-of-sl-two]]).

[L3] For $\mu\in\mathfrak h^*$, the weight space is $V_\mu=\{v:H\cdot v=\mu(H)v\text{ for all }H\in\mathfrak h\}$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[L4] The roots of $\mathfrak g$ form a reduced crystallographic Euclidean root system on $E$, and its root reflections coincide with the $s_\alpha$ of [L1] after complex-linear extension to $\mathfrak h^*$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[def-weyl-group-of-a-root-system]], [[def-root-reflection-from-a-coroot]]).

[L5] Relative to the chosen base $\Delta$, every element of the Weyl group is a product of the corresponding simple reflections ([[def-positive-system-and-base-of-simple-roots]], [[prop-weyl-length-equals-positive-root-inversion-number]]).

## Proof

**Proof technique:** direct.

1.1 Fix a simple root $\alpha=\alpha_i$ and the $\mathfrak{sl}_2$-triple $(e_\alpha,f_\alpha,h_\alpha)$ of [L1], and write $\rho$ for the action of $\mathfrak g$ on $V$. By [L2], the endomorphisms $E=\rho(e_\alpha)$ and $F=\rho(f_\alpha)$ are nilpotent. Hence the finite sums $\exp(E)$ and $\exp(-F)$ are defined and invertible, and so is $N_\alpha=\exp(E)\exp(-F)\exp(E)$. [A1, L1, L2, algebra]

2.1 Let $H\in\mathfrak h$ and put $a=\alpha(H)$. In the adjoint action of the root triple, the relations of [L1] give $\exp(\operatorname{ad}e_\alpha)H=H-ae_\alpha$, then $\exp(-\operatorname{ad}f_\alpha)(H-ae_\alpha)=H-ae_\alpha-ah_\alpha$, and applying $\exp(\operatorname{ad}e_\alpha)$ once more gives $H-ah_\alpha$. Conjugation by an exponential satisfies $\exp(E)\rho(x)\exp(-E)=\rho(\exp(\operatorname{ad}e_\alpha)x)$, with finite series here. Therefore $N_\alpha\rho(H)N_\alpha^{-1}=\rho(H-\alpha(H)h_\alpha)$. [L1, step 1.1, algebra]

3.1 Since the reflection $r_\alpha(H)=H-\alpha(H)h_\alpha$ is an involution, step 2.1 also gives $N_\alpha^{-1}\rho(H)N_\alpha=\rho(r_\alpha(H))$. If $v\in V_\mu$, then for every $H\in\mathfrak h$ one has $\rho(H)N_\alpha v=N_\alpha\rho(r_\alpha(H))v=\mu(r_\alpha(H))N_\alpha v=s_\alpha(\mu)(H)N_\alpha v$. Thus $N_\alpha(V_\mu)\subseteq V_{s_\alpha(\mu)}$. Applying the same argument to $N_\alpha^{-1}$ gives the reverse inclusion, so $N_\alpha$ restricts to an isomorphism $V_\mu\cong V_{s_\alpha(\mu)}$. Hence $\dim V_\mu=\dim V_{s_\alpha(\mu)}$ for every $\mu\in\mathfrak h^*$. [L1, L3, L4, step 2.1, algebra]

4.1 Every $w\in W$ is a product of simple reflections by [L5]. Applying step 3.1 successively to those factors gives $\dim V_{w\mu}=\dim V_\mu$ for every $w\in W$ and $\mu\in\mathfrak h^*$. [L4, L5, step 3.1]

5.1 The stated equalities follow from steps 3.1 and 4.1. [step 3.1, step 4.1] ∎
