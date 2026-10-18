---
id: lem-mackey-induction-classification-for-regular-euclidean-duals
kind: lemma
title: Mackey induction classifies regular Euclidean dual actions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-projection-valued-measure
  - def-external-semidirect-product
  - def-group-action
  - def-second-countable-space
  - def-locally-compact-space
  - def-hausdorff-space
  - def-continuous-map-top
  - def-pontryagin-dual-and-compact-open-topology
  - def-strongly-continuous-unitary-representation
  - def-separable-space
  - def-second-countable-space
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-second-countable-implies-separable
  - prop-second-countability-is-hereditary
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - lem-second-countable-lch-spaces-are-standard-borel
  - thm-mackey-imprimitivity-theorem
  - thm-uniqueness-in-mackey-imprimitivity
  - cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - thm-unitary-induction-from-a-closed-subgroup
  - lem-radon-nikodym-cocycle-of-a-homogeneous-measure
  - lem-borel-cross-sections-for-closed-subgroups
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.1, PDF pp. 9–11: the little-group induced-representation route; the local proof supplies the measurable converse and equivalence details."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64): the D=4 little-group construction, used only as corroboration."
---

## Statement

Assume AC. Let $d\ge1$, let $K$ be a second-countable locally compact Hausdorff group acting continuously by linear automorphisms on $N=\mathbb R^d$, and put $G=N\rtimes K$ with the product topology and the multiplication of [[def-external-semidirect-product]]. Let $\widehat N$ be the Pontryagin dual with $k\cdot\chi=\chi\circ\alpha_{k^{-1}}$. Suppose the dual $K$-action on all of $\widehat N$ has a countable family of invariant Borel sets separating distinct orbits. For each orbit $O$ fix $\chi_O\in O$, let $K_{\chi_O}=\{k\in K:k\cdot\chi_O=\chi_O\}$, and set $H_{\chi_O}=N\rtimes K_{\chi_O}$. Then
$$
(O,[\theta])\longmapsto\left[\operatorname{Ind}_{H_{\chi_O}}^G(\chi_O\otimes\theta)\right]
$$
is a bijection from pairs consisting of a $K$-orbit and a unitary-equivalence class of irreducible strongly continuous unitary representations $\theta$ of $K_{\chi_O}$ to the equivalence classes of irreducible strongly continuous unitary representations of $G$. Here
$$
(\chi_O\otimes\theta)(a,h)=\chi_O(a)\theta(h)\qquad(a\in N,\ h\in K_{\chi_O}).
$$
Changing the orbit representative conjugates the stabilizer and its representation. Different orbits give inequivalent induced representations. In the induced model the translation spectral PVM is multiplication over $X=G/H_\chi$, transported Borelly to $O$ with the full-support quasi-invariant measure from induction; it is concentrated on the inducing orbit $O$.

## Facts & Assumptions

**Given:** AC, the second-countable locally compact groups $N=\mathbb R^d$ and $K$, the continuous automorphism action, the regular-orbit hypothesis, and an orbit representative $\chi\in\widehat N$.

[F1] [[def-external-semidirect-product]]: $(n,k)(m,\ell)=(n\alpha_k(m),k\ell)$; the subgroup $H_\chi=N\rtimes K_\chi$ is closed when $K_\chi$ is closed.

[F2] [[def-pontryagin-dual-and-compact-open-topology]] and [[thm-dual-of-an-lca-group-is-locally-compact-abelian]]: $\widehat N$ is the locally compact Hausdorff character group with its compact-open topology, and the action is $k\cdot\chi=\chi\circ\alpha_{k^{-1}}$.

[F3] [[cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup]]: under AC, second-countable locally compact hypotheses, and countably separated dual orbits, every irreducible strongly continuous representation of $G$ is induced from $\chi\otimes\theta$ for an irreducible strongly continuous $\theta$ of $K_\chi$; its proof derives separability from cyclicity and records the induced translation action over the orbit.

[F4] [[thm-mackey-imprimitivity-theorem]] and [[thm-uniqueness-in-mackey-imprimitivity]]: every transitive system on $G/H_\chi$ is induced from a strongly continuous representation of $H_\chi$, and two such systems are equivalent exactly when their inducing representations are equivalent.

[F5] [[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]], and [[thm-unitary-induction-from-a-closed-subgroup]]: on the locally compact homogeneous space $X=G/H_\chi$ a full-support quasi-invariant Radon measure exists; $D_g(xH_\chi)=d(g_*\mu)/d\mu(xH_\chi)=\rho(g^{-1}x)/\rho(x)>0$ is the continuous Radon–Nikodym cocycle, and induction acts by $F(x)\mapsto D_g(xH_\chi)^{1/2}F(g^{-1}x)$ as a unitary strongly continuous representation.

[F6] [[lem-borel-cross-sections-for-closed-subgroups]]: for a second-countable locally compact Hausdorff group and closed subgroup, the quotient has a Borel cross-section and Borel section cocycle.

[F7] [[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]]: the translation representation has a unique regular PVM, and an intertwiner of translation representations intertwines their spectral PVMs.

[F8] [[cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup]]: in the orbit-supported induced model, the translation subgroup acts on the fibre over $x$ by $x$, and the inducing representation restricts to $N$ as $\chi I$.

[F9] By [[prop-second-countability-is-hereditary]], a subspace of a second-countable space is second-countable; by [[thm-second-countable-implies-separable]], any such space is separable under Countable Choice. Every second-countable locally compact Hausdorff space is standard Borel with a countably generated Borel sigma algebra, is a countable union of compact sets, and has a countable basis of relatively compact open sets ([[lem-second-countable-lch-spaces-are-standard-borel]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]). Here these properties are used for $X=G/H_\chi$, $G$, and the closed subgroup $K_\chi$; the orbit $O$ is only asserted to be Borel.

[F10] [[def-separable-space]]: a separable Hilbert space has a countable dense subset.

[F11] [[def-second-countable-space]], [[def-locally-compact-space]], [[def-hausdorff-space]], [[def-group-action]], and [[def-continuous-map-top]]: second countability means there is an at most countable basis; local compactness provides compact neighborhoods; Hausdorffness separates distinct points; a group action satisfies the identity and multiplication laws, and continuity is continuity of the action map.

[A1] AC is the choice-function principle [[def-axiom-of-choice]] required by the displayed Mackey, induction, and spectral suppliers; restricting its choice function to countable families supplies the Countable Choice used by [F9] ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** The hypotheses above, with AC.

1.1 Since $N$ is second-countable, locally compact, Hausdorff, and abelian, its dual has the compact-open character topology of [F2] and is locally compact Hausdorff by [F2]. The dual action is continuous: evaluation $(\gamma,a)\mapsto\gamma(a)$ is continuous because for $\gamma_0(a_0)$ in an open $W\subseteq\mathbb T$, one may choose a compact neighborhood $C_0$ of $a_0$ inside $\gamma_0^{-1}(W)$, and then $S(C_0,W)\times\operatorname{int}(C_0)$ is a neighborhood mapped into $W$. Therefore $(k,\gamma,a)\mapsto\gamma(\alpha_{k^{-1}}(a))$ is continuous. For compact $C\subseteq N$ and open $W\subseteq\mathbb T$, the tube lemma on $C$ shows that the inverse image of the compact-open subbasic set $S(C,W)$ under $(k,\gamma)\mapsto k\cdot\gamma$ is open. Hence this dual action is continuous, and the assumed invariant family makes its orbit relation regular. The stabilizer $K_\chi$ is closed as the inverse image of $\{\chi\}$ under the continuous orbit map. It inherits a countable basis from $K$; if $V$ is a relatively compact open neighborhood in $K$, then $V\cap K_\chi$ is relatively open in $K_\chi$ and its closure lies in the compact set $\overline V\cap K_\chi$, so $K_\chi$ is locally compact. Thus $K_\chi$ is second-countable locally compact and $H_\chi$ is closed by [F1]. The product-topology group $G=N\times K$ is second-countable locally compact, so [F3] applies. Applying [F3] to an irreducible representation $\pi$ gives an orbit $O=K\cdot\chi$ and an irreducible strongly continuous $\theta:K_\chi\to U(V)$ with $\pi\simeq\operatorname{Ind}_{H_\chi}^G(\chi\otimes\theta)$. To verify the separability needed below, let $\sigma$ be either $\pi$ or $\theta$ and let $v\ne0$ in its carrier. The closed span of $\sigma(J)v$, where $J=G$ or $K_\chi$ respectively, is a nonzero invariant subspace and hence the whole carrier by irreducibility. Each $J$ is second-countable; [F9] and [A1] give a countable dense subset $D_J\subset J$. Strong continuity makes $\{\sigma(d)v:d\in D_J\}$ dense in the orbit $\sigma(J)v$, and finite $\mathbb Q(i)$-linear combinations of these vectors form a countable dense subset of the carrier by [F10]. Thus both $\pi$ and $\theta$ have separable carriers. [F1, F2, F3, F4, F9, F10, F11, A1]

1.2 For $h\in K_\chi$, $\chi(\alpha_h(a))=(h^{-1}\cdot\chi)(a)=\chi(a)$. Therefore, using [F1], $ (\chi\otimes\theta)((a,h)(b,j))=\chi(a+\alpha_h(b))\theta(hj)=\chi(a)\chi(b)\theta(h)\theta(j), $ so $\chi\otimes\theta$ is a representation of $H_\chi$. It is strongly continuous because both factors are, and $H_\chi$ is a closed subgroup. [F1, F2, given]

2.1 The orbit $O$ is Borel: it is the intersection, over the countable separating invariant family, of each set containing $\chi$ and each complement of a set not containing $\chi$; points in $O$ have the same memberships as $\chi$, and any point outside $O$ is separated by one set. The orbit map $K/K_\chi\to O$, $kK_\chi\mapsto k\cdot\chi$, is a continuous bijection. Its inverse is Borel: every open subset of the second-countable locally compact quotient is a countable union of compact subsets, whose images under the orbit map are compact and hence closed in the Hausdorff dual. The map $X=G/H_\chi\to K/K_\chi$, $(a,k)H_\chi\mapsto kK_\chi$, is a homeomorphism: translations lie in $H_\chi$, and $(a,k)^{-1}(b,\ell)\in H_\chi$ exactly when $k^{-1}\ell\in K_\chi$, since the first coordinate is in $N\le H_\chi$. Thus $O$ and $X$ are Borel-isomorphic, as required to use the transitive system on $G/H_\chi$ in [F4]. Composing this Borel identification with [F6] gives a Borel section $s:O\to K$ with $s(x)\cdot\chi=x$. In section coordinates, $f(x)=F((0,s(x)))$; its inverse is the covariant extension $F((0,s(x))h)=(\chi\otimes\theta)(h)^{-1}f(x)$. These are Borel inverse maps and preserve the quotient norm. By [F5] choose a full-support quasi-invariant Radon measure on $X$ and transport it across the Borel identification to $O$; write $D_g$ for its transported Radon–Nikodym cocycle. The section form of induction is $ (U(a,k)f)(x)=D_{(a,k)}(x)^{1/2}\,x(a)\,\theta\!\left(s(x)^{-1}ks(k^{-1}\cdot x)\right)f(k^{-1}\cdot x), $ where $D_g$ is the Radon–Nikodym cocycle from [F5]. To see the fibre factor, write $q=k^{-1}\cdot x$, $r=s(q)^{-1}k^{-1}s(x)\in K_\chi$, and $b=-\alpha_{s(q)^{-1}k^{-1}}(a)$; then $(a,k)^{-1}(0,s(x))=(0,s(q))(b,r)$. Covariance $F(yh)=(\chi\otimes\theta)(h)^{-1}F(y)$ gives $\chi(-b)=x(a)$ by the dual action definition, and $\theta(r)^{-1}=\theta(s(x)^{-1}ks(q))$. The little-group factor lies in $K_\chi$ because $s(x)^{-1}ks(k^{-1}\cdot x)\cdot\chi=\chi$. The formula is Borel, and [F5] gives its unitary extension and strong continuity. [F4, F5, F6, step 1.2]

3.1 The section model is the measurable Hilbert-field realization of $L^2(X,\mu;V)$, with base $X=G/H_\chi$ and measure as in step 2.1. By [F9], $X$ has a countable Borel generator and an increasing compact exhaustion $C_n$; the Radon measure is finite on each $C_n$. Let $\mathcal A$ be the countable algebra generated by a countable basis together with the exhaustion. On each finite-measure $C_n$, the class of Borel subsets approximable in symmetric-difference measure by $\mathcal A\cap C_n$ is a sigma algebra: complements are taken relative to $C_n$, finite unions preserve approximation, and countable unions are reduced to finite unions by continuity from below of the finite measure. It contains the restricted generating algebra, so it contains every Borel subset of $C_n$. Therefore simple functions from this countable algebra are dense in scalar $L^2(C_n,\mu)$; truncation to $C_n$ shows their union is dense in $L^2(X,\mu)$. Since $V$ is separable by step 1.1, finite simple functions with values in a countable dense subset of $V$ are dense in $L^2(X,\mu;V)$; this set has a countable dense rational-complex span. The induced Hilbert space is therefore separable, and its closed subspaces $W,W^\perp$ are separable as required by [F4]. [F4, F5, F9, F10, step 1.1, step 2.1, choose]

3.2 The section cocycle obeys $\kappa(k,x)\kappa(\ell,k^{-1}\cdot x)=\kappa(k\ell,x)$ by cancellation of $s(k^{-1}\cdot x)$, while $(k^{-1}\cdot x)(b)=x(\alpha_k(b))$ by the dual action definition. Together with the Radon–Nikodym cocycle identity in [F5], these identities verify the semidirect-product multiplication in the displayed action. If $\mu$ is invariant, $D_g=1$; with a merely quasi-invariant $\mu$, the square-root factor is essential for unitarity. [F1, F5, step 2.1, algebra]

3.3 Setting $k=e$ in the section formula shows that each translation $a\in N$ acts by multiplication by $x(a)$. The unique spectral PVM [F7] for this multiplication representation is therefore multiplication by the indicators of Borel subsets of $O$ in orbit coordinates; its value on $O$ is the identity. [F5, F7, step 2.1]

4.1 Suppose the induced representation has a nonzero proper closed invariant subspace $W$. Its orthogonal complement is nonzero and invariant: for $u\in W^\perp$, $w\in W$, and $g\in G$, $\langle U(g)u,w\rangle=\langle u,U(g^{-1})w\rangle=0$. Hence the orthogonal projection onto $W$ commutes with $G$, and in particular with every translation operator; uniqueness in [F7] makes it commute with the translation PVM. Thus $W$ and $W^\perp$ inherit nonzero PVMs on $O$. Transport these PVMs along the equivariant Borel isomorphism of step 2.1 to $X=G/H_\chi$. For either transported restriction $Q_W$, define $S_W=\{x\in X:Q_W(V)\ne0\text{ for every open }V\ni x\}$. This set is closed and $G$-invariant by covariance. It is nonempty: otherwise the countable basis of $X$ from [F9] would cover $X$ by sets with zero projection, contradicting $Q_W(X)=I_W$ by countable additivity. Transitivity on $X$ gives $S_W=X$. The restrictions therefore give nonzero transitive systems of imprimitivity on $G/H_\chi$, with separable carriers by step 3.1. This argument uses the quotient topology on $X$, not any unproved topological identification with $O$. [F4, F7, F9, step 2.1, step 3.1]

4.2 If two induced representations are equivalent, an intertwiner $T$ makes $TPT^{-1}$ a regular PVM for the other translation representation, so uniqueness [F7] makes it that representation's spectral PVM. Each PVM has value $I$ on its inducing orbit by step 3.3 and vanishes on every disjoint orbit; hence equivalence forces the inducing orbits to agree. At a fixed representative $\chi$, their transitive systems on $G/H_\chi$ are equivalent through the identification in step 2.1, and uniqueness [F4] implies their little-group representations are equivalent. Conversely an equivalence of little-group representations induces an equivalence of the covariant models by acting with the fibre unitary pointwise. If $\chi'=k\cdot\chi$ is another representative, then $K_{\chi'}=kK_\chi k^{-1}$ and conjugation by $(0,k)$ carries $\chi\otimes\theta$ to $\chi'\otimes\theta'$, where $\theta'(h')=\theta(k^{-1}h'k)$; the corresponding induced models are equivalent by the same change of variables. Thus the orbit and little-group class determine exactly one irreducible representation class. [F1, F4, F5, F7, step 2.1, step 3.3, algebra]

5.1 Apply [F4] to the two restricted systems. By [F8], the translation action on the fibre over $\chi$ is $\chi I$, so their reconstructed inducing representations have the forms $\chi\otimes\theta_W$ and $\chi\otimes\theta_{W^\perp}$. Their direct sum is the original system because $W\oplus W^\perp$ is the whole induced Hilbert space and the two restricted PVMs sum to $P$; uniqueness in [F4] therefore gives $\theta\simeq\theta_W\oplus\theta_{W^\perp}$. Both summands are nonzero, contradicting irreducibility of $\theta$. Hence the induced representation is irreducible. [F3, F4, F8, step 4.1]

6.1 Step 1.1 yields every irreducible as one of the induced models. Steps 1.2–3.3 establish the covariant model and its orbit PVM; steps 4.1 and 5.1 prove irreducibility; step 4.2 proves the equivalence criterion. Therefore the stated map is a bijection. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 5.1, step 4.2, A1] ∎
