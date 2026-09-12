---
id: "lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups"
kind: "lemma"
title: "A weak equivalence has vanishing mapping-cylinder relative groups"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","thm-long-exact-sequence-of-relative-homotopy-groups","lem-interval-exponential-law-and-quotient-homotopies","prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","thm-quotient-universal-property"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher proof of Theorem 4.5
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $f:X\to Y$ be a continuous map of arbitrary topological spaces. Give
$$M_f=(Y\sqcup(X\times I))/((x,0)\sim f(x))$$
its ordinary quotient topology, and put $j(x)=[x,1]$. Identify $X$ with this embedded copy. Then $f$ is a weak homotopy equivalence if and only if $\pi_0(j)$ is bijective and $\pi_n(M_f,X,j(x))$ is trivial for every $x\in X$ and every $n\ge1$. Here relative degree one is a one-element pointed set, not a group. No CW, separation or choice hypothesis is required for this criterion.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] specifies bijectivity on components and group isomorphisms at all source basepoints.

[F2] [[thm-long-exact-sequence-of-relative-homotopy-groups]] gives exactness for arbitrary based pairs, including the pointed-set tail, with no assertion of terminal component surjectivity.

[F3] [[lem-interval-exponential-law-and-quotient-homotopies]] says that an arbitrary quotient map times the ordinary interval is quotient.

[F4] [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] gives induced homomorphisms and equality for based homotopies.

[F5] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives the isomorphism $\beta_\gamma:\pi_n(V,\gamma(1))\to\pi_n(V,\gamma(0))$ and the identity $u_* = \beta_\gamma v_*$ for a homotopy from $u$ to $v$ with basepoint track $\gamma$.

[F6] [[thm-quotient-universal-property]] gives continuity of maps descended through the ordinary quotient.

## Proof

**Given:** The continuous map $f$ and the displayed ordinary quotient. Let $k:Y\to M_f$ be the other endpoint inclusion.

1.1 Both endpoint inclusions are closed embeddings, including for non-Hausdorff spaces. They are continuous injective maps. For a closed $C\subseteq X$, the inverse image of $j(C)$ under the quotient map is just $C\times\{1\}$, closed in the disjoint union. Thus $j(C)$ is closed in $M_f$, which proves that $j$ is a closed embedding. For closed $E\subseteq Y$, the inverse image of $k(E)$ is $E\sqcup(f^{-1}(E)\times\{0\})$, also closed. Thus $k$ is a closed embedding. In particular the subspace pair in the statement really uses the given topology of $X$. [F6, given]

1.2 Define $r:M_f\to Y$ by $r(k(y))=y$ and $r([x,s])=f(x)$. The defining maps on the disjoint summands are continuous and respect the identifications, so [F6] makes $r$ continuous, with $rj=f$ and $rk=\mathrm{id}_Y$. The formulas $$D(k(y),t)=k(y),\qquad D([x,s],t)=[x,(1-t)s]$$ agree at the gluing end and descend continuously by [F3]. They define a homotopy from $\mathrm{id}_{M_f}$ to $kr$, fixing $k(Y)$ pointwise. Each $z\in M_f$ is joined by its track to $k(r(z))$, so $\pi_0(k)\pi_0(r)$ is the identity; the other composite is the identity because $rk$ is. Therefore $\pi_0(r)$ is bijective. [F3, F6, given]

2.1 Fix $x\in X$ and put $y=f(x)$. At the basepoint $k(y)$ the homotopy $D$ is based. Thus [F4] and $rk=\mathrm{id}$ show that $$k_*:\pi_n(Y,y)\longrightarrow\pi_n(M_f,k(y))$$ is an isomorphism with inverse induced by $r$. At the source endpoint $j(x)$, the track is $\gamma_x(t)=[x,1-t]$, running from $j(x)$ to $k(y)$. Apply [F5] to $D$, now with domain based at $j(x)$: $$\mathrm{id}_{\pi_n(M_f,j(x))}=\beta_{\gamma_x}\,k_*\,r_*.$$ Both $\beta_{\gamma_x}$ and the displayed $k_*$ are isomorphisms. Consequently $r_*:\pi_n(M_f,j(x))\to\pi_n(Y,y)$ is their inverse composite, and is an isomorphism for every $n\ge1$. This uses the actual track; it does not mistake $k$ for a based inverse at $j(x)$. [F4, F5, step 1.2]

3.1 Since $f=rj$, steps 1.2 and 2.1 imply that $f$ is weak precisely when $j$ is bijective on components and induces isomorphisms on all positive groups at each $x\in X$. Suppose first these conditions hold. For $n\ge2$ and $\alpha\in\pi_n(M_f,X,j(x))$, its boundary belongs to the kernel of $\pi_{n-1}(X,x)\to\pi_{n-1}(M_f,j(x))$. That kernel is trivial, so exactness [F2] puts $\alpha$ in the image of $\pi_n(M_f,j(x))$. Surjectivity from $\pi_n(X,x)$ then makes this image trivial by exactness at $\pi_n(M_f,j(x))$. Thus $\alpha$ is the distinguished element. This reasoning also works for $n=2$, without assuming that the relative group is abelian. [F1, F2, F4, step 1.2, step 2.1]

3.2 Conversely suppose the component condition and all the relative trivialities in the statement. Fix $x\in X$ and $n\ge1$. In the exact segment $$\pi_{n+1}(M_f,X,j(x))\longrightarrow\pi_n(X,x)\xrightarrow{j_*}\pi_n(M_f,j(x))\longrightarrow\pi_n(M_f,X,j(x)),$$ the left and right relative terms are trivial. Exactness at $\pi_n(X,x)$ gives a trivial kernel, so its homomorphism $j_*$ is injective. Exactness at $\pi_n(M_f,j(x))$ gives surjectivity, since the next map takes everything to the distinguished element. This includes $n=1$, whose rightmost term is only a pointed set. Hence $j_*$ is an isomorphism in every positive degree. Combining with the separately assumed component bijection and steps 1.2 and 2.1 proves that $f$ is weak. [F1, F2, F4, step 1.2, step 2.1]

4.1 In relative degree one let $\alpha$ be any path class from a point of $X$ to $j(x)$. Its boundary is a component of $X$ mapping to the component of $j(x)$. Injectivity of $\pi_0(j)$ implies that this boundary is the distinguished component of $x$. Exactness of the pointed tail [F2] puts $\alpha$ in the image of $\pi_1(M_f,j(x))$. Surjectivity of $\pi_1(X,x)\to\pi_1(M_f,j(x))$ and exactness at the latter group show that its whole image in the relative pointed set is the distinguished point. Therefore $\pi_1(M_f,X,j(x))$ has one element. This argument uses no subtraction or group operation on that pointed set. [F2, step 3.1]

5.1 If $X$ is empty, $M_f=Y$ and relative basepoint assertions are vacuous, but component bijectivity on either side forces $Y$ empty. Thus the equivalence still holds. Equal endpoint images or a constant map cause no problem in the quotient formulas: the free end remains embedded, and the deformation fixes every point of the included target. The homotopy has exactly the stated values at $t=0,1$ and each source basepoint uses its explicitly prescribed track. All arguments are formulas, exactness or an argument at one arbitrary point/class. No selection of representatives or choice principle is used. Steps 3.1 and 4.1 prove the forward direction, and step 3.2 proves the converse. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 3.2] ∎
