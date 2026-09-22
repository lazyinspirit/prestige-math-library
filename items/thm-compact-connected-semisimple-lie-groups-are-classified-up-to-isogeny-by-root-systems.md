---
id: thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems
kind: theorem
title: Semisimple compact groups up to isogeny
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part, thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, def-axiom-of-choice, thm-lie-second-fundamental-theorem, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, thm-isomorphism-theorem-for-complex-semisimple-lie-algebras, thm-existence-theorem-for-complex-semisimple-lie-algebras, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, thm-serre-presentation-theorem, thm-analytic-and-root-system-weyl-groups-agree, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-finite-dimensional-representations-of-sl-two, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-closed-subgroup-theorem, thm-heine-borel-rn, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, prop-exponential-map-is-natural-for-lie-group-homomorphisms, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group, thm-continuous-homomorphisms-between-lie-groups-are-smooth]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI §§1–2, Theorem 6.11 and Corollaries 6.20–6.21 (compact forms and their conjugacy)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8 (compact integration of highest-weight modules)"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lectures 39 and 42, especially Proposition 39.8 and Theorem 42.4"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Reduced crystallographic root systems classify
compact connected semisimple Lie groups up to finite central isogeny: two such
groups with isomorphic root systems are centrally isogenous, and conversely a
finite central isogeny preserves the Lie algebra and the root system. Here a finite central isogeny is a surjective Lie-group homomorphism with finite central kernel, and two groups are centrally isogenous when they admit a common connected covering group mapping to both by such isogenies. Every reduced crystallographic root system is realized, with the empty system corresponding to the trivial group.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, two compact connected semisimple Lie groups $G_1,G_2$ with maximal tori $T_i$ and root systems $\Phi_i=\Phi(G_i,T_i)$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]); it supplies the countable choice used by integration and the other cited Lie-group interfaces.

[L1] $\Phi_i$ are reduced crystallographic root systems on the semisimple parts of $\operatorname{Lie}(T_i)$ ([[thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]]).

[L2] Every reduced crystallographic root system is realized by a complex semisimple Lie algebra, and two such algebras with isomorphic based root systems are isomorphic. Bases can be matched by the Weyl group; Cartan subalgebras are conjugate ([[thm-existence-theorem-for-complex-semisimple-lie-algebras]], [[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]], [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]], [[thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]]).

[L3] The Lie functor from connected simply connected real Lie groups to finite-dimensional real Lie algebras is an equivalence, and integration of a Lie-algebra homomorphism from a simply connected group is unique ([[thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras]], [[thm-lie-second-fundamental-theorem]]).

[L4] For a compact connected semisimple group the character lattice satisfies $Q\subseteq X^*(T)\subseteq P$, and the simply connected compact form has $X^*(T)=P$ ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]). Every connected Lie group is the quotient of its simply connected integration by a discrete central subgroup ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L5] Simple-root triples generate a complex semisimple algebra with exactly the Serre relations ([[thm-serre-presentation-theorem]]). For the complexification of a compact semisimple algebra, [[thm-analytic-and-root-system-weyl-groups-agree]] states that the compact conjugation can be normalized on each simple-root triple by $\sigma(e_i)=-f_i$ and $\sigma(f_i)=-e_i$; then bracket preservation gives $\sigma(h_i)=\sigma([e_i,f_i])=-h_i$.

[L6] The Killing form is symmetric and invariant, and it is preserved by every automorphism. A characteristic-zero Lie algebra with nondegenerate Killing form is semisimple; for a semisimple algebra all derivations are inner and the adjoint map is injective ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

[L7] Closed subgroups of real Lie groups are embedded Lie subgroups, exponentials are local diffeomorphisms at zero and natural under homomorphisms, and closed bounded subsets of finite-dimensional Euclidean space are compact ([[thm-cartans-closed-subgroup-theorem]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[thm-heine-borel-rn]]).

[L8] Quotients by closed normal subgroups are Lie groups with quotient Lie algebra, and continuous homomorphisms between real Lie groups are smooth ([[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]], [[thm-continuous-homomorphisms-between-lie-groups-are-smooth]]).

[L9] Every root space of a complex semisimple Lie algebra is one-dimensional. The adjoint action of each simple-root $\mathfrak{sl}_2$ is a direct sum of the explicitly described finite-dimensional irreducible modules. Every root has unique simple-root coordinates of one sign ([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[thm-finite-dimensional-representations-of-sl-two]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\Phi_1\cong\Phi_2$. By the hypothesis that the groups are semisimple, their Lie algebras and complexifications are semisimple. Match bases using the given root-system isomorphism and [L2], and in each complexification choose simple-root triples normalized for its compact conjugation $\sigma_i$ as in [L5]. The Cartan matrices agree, so the Serre theorem in [L5] gives a complex isomorphism $\psi:(\mathfrak g_1)_{\mathbb C}\to(\mathfrak g_2)_{\mathbb C}$ sending every $e_i,f_i,h_i$ to the corresponding generator. On these generators $\psi\sigma_1=\sigma_2\psi$; because they generate, the equality holds everywhere. The fixed algebra of $\sigma_i(U+iV)=U-iV$ is $\mathfrak g_i$, so $\psi$ restricts to a real Lie-algebra isomorphism $\mathfrak g_1\cong\mathfrak g_2$. [L1, L2, L5, algebra]

1.2 We construct the compact real algebra needed for realization without using later real-form theory. Let $\Phi$ be a nonempty reduced crystallographic root system, choose a base with Cartan matrix $A$, and let $\mathfrak l=\mathfrak g(A)$ with simple generators $e_i,f_i,h_i$ be the Serre algebra of [L5]; [L2] identifies its root system with $\Phi$. The conjugate-linear assignment $$\kappa(e_i)=-f_i,\qquad \kappa(f_i)=-e_i,\qquad \kappa(h_i)=-h_i$$ preserves every defining relation: it exchanges the two Serre families, exchanges the $[h_i,e_j]$ and $[h_i,f_j]$ relations, and preserves $[e_i,f_j]=\delta_{ij}h_i$. It therefore descends to a conjugate-linear involutive automorphism of $\mathfrak l$. Its fixed algebra $\mathfrak k$ is a real form, since every $Z\in\mathfrak l$ has the unique decomposition $$Z=\frac{Z+\kappa Z}{2}+i\frac{Z-\kappa Z}{2i}$$ into two fixed vectors. [L2, L5, algebra]

1.3 Let $B$ be the Killing form of $\mathfrak l$ and put $\langle X,Y\rangle=-B(X,\kappa Y)$. On $\mathfrak h_{\mathbb R}=\sum_i\mathbb Rh_i$, the root decomposition gives $$B(H,H)=\sum_{\alpha\in\Phi}\alpha(H)^2>0\qquad(H\ne0),$$ because the roots take real values on the $h_i$ and span $\mathfrak h^*$. Invariance gives $B(h_i,h_i)=2B(e_i,f_i)$, hence $B(e_i,f_i)>0$. Put $E_i=\operatorname{ad}e_i$ and $F_i=\operatorname{ad}f_i$. By [L9], the adjoint action of the simple-root triple is a direct sum of finite-dimensional $\mathfrak{sl}_2$-modules, so $E_i,F_i$ are nilpotent on each summand and
$$w_i=\exp(E_i)\exp(-F_i)\exp(E_i)$$
is a well-defined Lie-algebra automorphism. Directly from the $\mathfrak{sl}_2$ brackets, $w_i$ sends $h_i$ to $-h_i$, fixes $\ker\alpha_i\subset\mathfrak h$, and sends $\mathfrak l_\alpha$ to $\mathfrak l_{s_i\alpha}$. On an irreducible module of highest weight $m$, use the basis $v_k=F_i^kv_0/k!$, for which $E_iv_k=(m-k+1)v_{k-1}$ and $F_iv_k=(k+1)v_{k+1}$; the finite binomial expansion on these basis vectors gives
$$\exp(-F_i)\exp(E_i)\exp(-F_i)=\exp(E_i)\exp(-F_i)\exp(E_i).$$
Since $\kappa E_i\kappa=-F_i$, this identity gives $\kappa w_i\kappa=w_i$. If a positive nonsimple root $\alpha=\sum n_j\alpha_j$ had $(\alpha,\alpha_j)\le0$ for every $j$ with $n_j>0$, then $(\alpha,\alpha)=\sum n_j(\alpha,\alpha_j)\le0$; hence some such $j$ has $(\alpha,\alpha_j)>0$, and the root-string property encoded by that finite-dimensional $\mathfrak{sl}_2$-module makes $s_j\alpha$ positive of smaller height. Induction, and sign change for negative roots, shows that a product of the $w_i$ carries every root to a simple root. Preservation of $B$ and commutation with $\kappa$ now give $\langle X,X\rangle>0$ on every nonzero root vector, reducing by the one-dimensionality in [L9] to $\langle ce_i,ce_i\rangle=|c|^2B(e_i,f_i)>0$. On the Cartan algebra, $\langle H,H\rangle=B(H,\overline H)>0$ by the first displayed formula. Distinct Cartan/root summands and distinct root spaces are orthogonal for this Hermitian form, because $B(\mathfrak h,\mathfrak l_\alpha)=0$ and $B(\mathfrak l_\alpha,\mathfrak l_\beta)=0$ unless $\alpha+\beta=0$, while $\kappa(\mathfrak l_\beta)=\mathfrak l_{-\beta}$. Thus $\langle\ ,\ \rangle$ is positive definite. For $X\in\mathfrak k$ it equals $-B(X,X)$, so $B|_{\mathfrak k}$ is negative definite and $\mathfrak k$ is compact. [L6, L9, step 1.2, algebra]

2.1 For the groups in step 1.1 take the simply connected covering $\widetilde G_1\to G_1$. By [L4] this covering group is compact and the covering has finite central kernel. By [L3] the real algebra isomorphism integrates to $F:\widetilde G_1\to G_2$. Its differential is invertible, so local exponential charts in [L7] make F a local diffeomorphism, and its image an open subgroup; connectedness makes the image all of $G_2$. Its kernel is closed and discrete, and is central because conjugation of each kernel element gives a continuous map from connected $\widetilde G_1$ into that discrete kernel. Compactness of $\widetilde G_1$ makes the kernel finite. A surjective local-diffeomorphism homomorphism is a covering: choose an identity neighborhood on which it is a diffeomorphism and whose pairwise quotients meet the kernel only in the identity; its kernel translates give disjoint sheets, and translation gives the same description over every point. Thus the two maps from $\widetilde G_1$ give the claimed common finite central cover. [L3, L4, L7, step 1.1]

2.2 The algebra $\mathfrak k$ is semisimple by [L6], and $\operatorname{Der}(\mathfrak k)=\operatorname{ad}(\mathfrak k)$. Every automorphism preserves its negative-definite Killing form, so $\operatorname{Aut}(\mathfrak k)$ is the subset of the corresponding orthogonal group cut out by the finitely many closed equations $A[x,y]=[Ax,Ay]$. It is therefore compact and, by [L7], an embedded Lie subgroup. Its Lie algebra is $\operatorname{Der}(\mathfrak k)$: differentiation gives one inclusion, while $e^{tD}$ preserves brackets for every derivation $D$. Hence $K=\operatorname{Aut}(\mathfrak k)^0$ is a compact connected Lie group with Lie algebra $\operatorname{ad}(\mathfrak k)\cong\mathfrak k$. A maximal torus has a complexified Cartan subalgebra; the compact-root/Lie-root identification in [L5], followed by Cartan conjugacy in [L2], identifies its root system with that of $\mathfrak l$, hence with $\Phi$. For the empty root system take the trivial group. This proves realization for every root system. [L2, L5, L6, L7, step 1.2, step 1.3, algebra]

3.1 Conversely let $f:G_1\to G_2$ be a finite central isogeny with kernel D. By [L8], $G_1/D$ is a Lie group with Lie algebra $\mathfrak g_1/\operatorname{Lie}(D)=\mathfrak g_1$. The induced bijection $\overline f:G_1/D\to G_2$ is continuous, and it is a homeomorphism because its domain is compact and its target Hausdorff. Both it and its inverse are continuous homomorphisms, hence smooth by [L8]. Thus its differential is a Lie-algebra isomorphism, and so is df. A maximal toral algebra corresponds to a maximal toral algebra under this isomorphism, and [L1, L2] identify the complexified Cartan root systems. Therefore f preserves the root system, though it need not identify character lattices or root data. This also holds along a common finite central cover. Combining this converse with steps 2.2 and 2.1 proves the classification, including the trivial group. [A1, L1, L2, L8, step 2.2, step 2.1] ∎
