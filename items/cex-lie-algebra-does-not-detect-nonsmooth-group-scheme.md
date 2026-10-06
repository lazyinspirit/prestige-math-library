---
id: cex-lie-algebra-does-not-detect-nonsmooth-group-scheme
kind: counterexample
title: "The Lie algebra does not detect nonsmooth group schemes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["ex-additive-and-infinitesimal-group-schemes", "ex-lie-algebras-of-alpha-p-mu-p-and-gl-n", "def-smooth-morphism-schemes", "def-ag-geometrically-regular-algebra-and-fibre", "def-regular-local-ring-geometric-point", "lem-regular-local-domain-induction", "def-ag-standard-smooth-algebra", "thm-ag-standard-smooth-geometric-regularity", "cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented", "def-locally-finite-presentation-morphism", "def-group-scheme-over-a-field", "def-axiom-of-choice", "lem-field-is-noetherian"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 2 §2.5, printed p. 40 (PDF 51): alpha_{p^m} and mu_{p^m} are isomorphic as schemes but not as algebraic groups; Ch. 10, printed p. 191 (PDF 202): the remark Lie(alpha_p) = Lie(G_a)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

For a group scheme of finite type over a field $k$, the Lie algebra $\operatorname{Lie}(G)$ determines whether $G$ is smooth over $k$; equivalently, two group schemes of finite type over $k$ with isomorphic Lie algebras are either both smooth or both nonsmooth.

## Facts & Assumptions

**Given:** The Axiom of Choice and a field $k$ of characteristic $p>0$.

[F1] [[ex-additive-and-infinitesimal-group-schemes]]: $\alpha_p\subseteq\mathbf G_a$ and $\mu_p\subseteq\mathbf G_m$ are closed subgroup schemes, and the coordinate rings of $\alpha_p$ and $\mu_p$ are isomorphic to $k[s]/(s^p)$ with nonzero nilpotent $s$; both are finite of length $p$ over $k$, while $\mathbf G_a=\operatorname{Spec}k[t]$ and $\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ have reduced coordinate rings.

[F2] [[ex-lie-algebras-of-alpha-p-mu-p-and-gl-n]]: $\operatorname{Lie}(\mathbf G_a)\cong k\cong\operatorname{Lie}(\alpha_p)$ as $k$-Lie algebras, and $\operatorname{Lie}(\mathbf G_m)\cong k\cong\operatorname{Lie}(\mu_p)$; all four brackets vanish.

[F3] [[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]] and [[def-regular-local-ring-geometric-point]]: if $X$ is smooth at a point $x$ over the field $k$, then taking the trivial extension $k/k$ in the geometric-regularity clause makes the local ring $\mathcal O_{X,x}$ regular.

[F4] [[lem-regular-local-domain-induction]]: assuming the Axiom of Choice, every regular local ring is an integral domain ([[def-axiom-of-choice]]).

[F5] [[def-ag-standard-smooth-algebra]] and [[thm-ag-standard-smooth-geometric-regularity]]: a standard smooth presentation over $k$ gives a flat morphism with geometrically regular fibres, hence smoothness; a localisation of a polynomial ring, such as $k[t]$ or $k[t,t^{-1}]$, admits the standard smooth presentation with no equations and is finitely presented over the Noetherian field $k$ by [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]] and [[lem-field-is-noetherian]] ([[def-locally-finite-presentation-morphism]]).

[F6] [[def-group-scheme-over-a-field]]: group schemes of finite type over $k$ include the finite nonreduced examples of [F1].

## Counterexample

**Proof technique:** direct.

1.1 The subgroup scheme $\alpha_p$ is not smooth at its origin. Its coordinate ring is $k[s]/(s^p)$ with $s\neq0$ and $s^p=0$ by [F1], so it is not reduced. Every element outside $(s)$ is a unit by a finite geometric sum, so localization at $(s)$ leaves this ring unchanged and the class $s$ remains nonzero. If $\alpha_p$ were smooth at the origin, [F3] with the trivial extension $k/k$ would make the local ring $k[s]/(s^p)_{(s)}$ regular, and [F4] would make that ring an integral domain, contradicting $s\neq0$ with $s^p=0$; hence $\alpha_p$ is not smooth over $k$. The same argument with the same coordinate ring, using $s=t-1$, shows that $\mu_p$ is not smooth over $k$. [F1, F3, F4, algebra]

1.2 The ambient groups are smooth. The polynomial ring $k[t]$ is a localisation of a polynomial ring and its Jacobian presentation has no equations, so it is standard smooth over $k$; by [F5] the morphism $\mathbf G_a\to\operatorname{Spec}k$ is flat with geometrically regular fibres and locally of finite presentation over the Noetherian field $k$, hence smooth by definition. The same presentation with no equations applies to $k[t,t^{-1}]=(k[t])_t$, so $\mathbf G_m$ is smooth over $k$. [F5, algebra]

2.1 The Lie algebras agree. By [F2] there are isomorphisms of $k$-Lie algebras $\operatorname{Lie}(\alpha_p)\cong\operatorname{Lie}(\mathbf G_a)$ and $\operatorname{Lie}(\mu_p)\cong\operatorname{Lie}(\mathbf G_m)$. Combining this with steps 1.1 and 1.2, the nonsmooth finite group scheme $\alpha_p$ and the smooth group scheme $\mathbf G_a$ have isomorphic Lie algebras, and likewise for $\mu_p$ and $\mathbf G_m$; therefore the Lie algebra of a group scheme of finite type over a field does not determine smoothness, and the refuted statement fails. Choice is inherited through the matrix-group and Lie-bracket suppliers [F1, F2], the regular-local-domain supplier [F4], and the standard-smoothness criterion [F5]. [F1, F2, F3, F4, F5, F6, step 1.1, step 1.2] ∎

## Remarks

The contrast is the standard illustration that the Lie algebra is a first-order invariant: it sees the cotangent space at the identity, which is one-dimensional for both $\alpha_p$ and $\mathbf G_a$, but it does not see the nilpotent thickness of $k[s]/(s^p)$. In characteristic $0$ Cartier's theorem removes the phenomenon for group schemes of finite type.
