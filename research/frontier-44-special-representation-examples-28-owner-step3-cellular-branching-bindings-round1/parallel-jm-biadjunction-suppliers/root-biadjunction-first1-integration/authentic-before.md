---
id: lem-finite-group-induction-is-coinduction-and-thus-biadjoint
kind: lemma
title: "Finite-group induction is coinduction, hence biadjoint to restriction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-restriction-induction-and-coinduction-for-group-modules,
       lem-the-group-ring-is-free-over-a-subgroup-ring,
       thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §6.3 (induced and coinduced modules, the relative Frobenius isomorphism for finite-index subgroups), printed pp. 164-166"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Peter Webb, A Course in the Theory of Groups, or equivalently Webb's finite group representation notes, Chapter 7 (the natural isomorphism Ind_H^G M = kG tensor_{kH} M -> Hom_{kH}(kG,M) for finite G)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
---

## Statement

Let $H\le G$ be finite groups and let $k$ be any field. For every left
$kH$-module $M$ the map
$$\Phi_M:\ \operatorname{Ind}_H^G M=kG\otimes_{kH}M\longrightarrow\operatorname{Coind}_H^G M=\operatorname{Hom}_{kH}(kG,M),\qquad \Phi_M(g\otimes m)(x)=\begin{cases}(xg)m,&xg\in H,\\ 0,&xg\notin H,\end{cases}$$
is a natural isomorphism of $kG$-modules
([[def-restriction-induction-and-coinduction-for-group-modules]]). Consequently
$\operatorname{Ind}_H^G\cong\operatorname{Coind}_H^G$ naturally, so induction
is both a left and a right adjoint of restriction
([[thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]])
and is exact. No hypothesis on the characteristic of $k$, on splitting
fields, or on the prime $2$ is needed, and the argument is choice-free: it
uses only the finite selection of least representatives of the finitely many
left cosets.

## Facts & Assumptions

**Given:** Finite groups $H\le G$, a field $k$, a left $kH$-module $M$, and a
set $T\subseteq G$ containing exactly one representative of each left coset
$gH$ (a left transversal), chosen as the set of least elements for a fixed
linear order of $G$.

[F1] $\operatorname{Ind}_H^GM=kG\otimes_{kH}M$ is the tensor product of the
$(kG,kH)$-bimodule $kG$ with $M$, with $g\cdot(x\otimes m)=gx\otimes m$; the
elements of $kG$ form a $k$-basis, and the defining relations are
$xh\otimes m=x\otimes hm$ for $h\in H$. The coinduced module
$\operatorname{Coind}_H^GM=\operatorname{Hom}_{kH}(kG,M)$ consists of the
$k$-linear maps $\varphi$ with $\varphi(hx)=h\varphi(x)$ for all $h\in H$,
$x\in G$, with $(g\varphi)(x)=\varphi(xg)$
([[def-restriction-induction-and-coinduction-for-group-modules]]).

[F2] Induction is left adjoint and coinduction is right adjoint to
restriction ([[thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]]).

[F3] $kG$ is free as a right $kH$-module on any left transversal, so
$-\otimes_{kH}kG$ and induction preserve exactness from the right; a
supplied transversal is the only choice input
([[lem-the-group-ring-is-free-over-a-subgroup-ring]]).

[F4] Every element of $G$ is uniquely $th$ with $t\in T$, $h\in H$, and
$G$ is the disjoint union of the cosets $gH$, $g\in G$; $H$ is a finite group
and every product in $kG$ is a finite sum.

## Proof

**Proof technique:** direct.

1.1 $\Phi_M$ is a well-defined $kG$-linear map. For fixed $g,m$ the formula defines a function on $G$: if $xg\in H$ then $(xg)m\in M$, otherwise $0$. It is $k$-linear in $x$ by definition, and it is $kH$-linear: for $h\in H$ and $x\in G$, $\Phi_M(g\otimes m)(hx)=((hx)g)m$ if $hxg\in H$ and $0$ otherwise; since $hxg=(hx)g$ and $hxg\in H\iff xg\in H$ (as $h,h^{-1}\in H$), this equals $h((xg)m)=h\Phi_M(g\otimes m)(x)$ in the first case and $0$ in the second. Hence $\Phi_M(g\otimes m)\in\operatorname{Coind}_H^GM$. The map is $k$-linear and in the second tensor variable balanced: for $h\in H$, the functions $\Phi_M(gh\otimes m)$ and $\Phi_M(g\otimes hm)$ both send $x$ to $((xg)h)m=(xg)(hm)$ when $xg\in H$ and to $0$ otherwise; so $\Phi_M$ is well defined on the tensor product. Finally it is $kG$-linear: $\Phi_M(g_0g\otimes m)(x)=((xg_0)g)m$ if $xg_0g\in H$ and $0$ otherwise, and $(g_0\Phi_M(g\otimes m))(x)=\Phi_M(g\otimes m)(xg_0)=((xg_0)g)m$ if $xg_0g\in H$ and $0$ otherwise, the two conditions being the same. [given, F1]

1.2 The inverse on coinduced maps. Define, for $\varphi\in\operatorname{Coind}_H^GM$, $$\Psi_M(\varphi):=\sum_{t\in T}t^{-1}\otimes\varphi(t)\in kG\otimes_{kH}M.$$ The sum is finite because $T$ is finite by [F4]. The definition does not depend on the chosen transversal: if $T'$ is another and $t'\in T'$ lies in the left coset $tH$, say $t'=th$ with $h\in H$, then $t'^{-1}\otimes\varphi(t')=h^{-1}t^{-1}\otimes\varphi(th)=t^{-1}\otimes h^{-1}\varphi(th)=t^{-1}\otimes h^{-1}h\varphi(t)=t^{-1}\otimes\varphi(t)$, using the balancing relation of [F1] and the $kH$-linearity of $\varphi$. Hence $\Psi_M$ is a well-defined $k$-linear map $\operatorname{Coind}_H^GM\to\operatorname{Ind}_H^GM$. [given, F1, F4]

2.1 $\Phi_M\Psi_M=\mathrm{id}$. Let $\varphi\in\operatorname{Coind}_H^GM$ and $x\in G$. By [F4] let $t_0\in T$ and $h_0\in H$ be the unique elements with $x=h_0t_0$, so that $x\in Ht_0$. Then $\Phi_M(\Psi_M(\varphi))(x)=\sum_{t\in T}\Phi_M(t^{-1}\otimes\varphi(t))(x)=\sum_{t\in T,\ xt^{-1}\in H}(xt^{-1})\varphi(t)$. Since $xt^{-1}\in H\iff x\in Ht\iff Ht_0=Ht\iff t=t_0$, exactly one term survives, and it equals $(h_0t_0t_0^{-1})\varphi(t_0)=h_0\varphi(t_0)=\varphi(h_0t_0)=\varphi(x)$, using $kH$-linearity of $\varphi$. [step 1.1, step 1.2, F1, F4]

2.2 $\Psi_M\Phi_M=\mathrm{id}$. Let $g\in G$ and $m\in M$. Then $\Psi_M(\Phi_M(g\otimes m))=\sum_{t\in T}t^{-1}\otimes\Phi_M(g\otimes m)(t)=\sum_{t\in T,\ tg\in H}t^{-1}\otimes(tg)m$. The elements $t$ with $tg\in H$ are those with $t\in Hg^{-1}$, which is a single left coset of $H$; by [F4] the transversal $T$ meets it in exactly one element $t_0$, so the sum has one term $t_0^{-1}\otimes(t_0g)m$. Writing $h:=(t_0g)^{-1}\in H$ and using the balancing relation, $t_0^{-1}\otimes(t_0g)m=(gh)\otimes(t_0g)m=g\otimes h(t_0g)m=g\otimes m$. Since the elements $g\otimes m$ span $\operatorname{Ind}_H^GM$ over $k$, $\Psi_M\Phi_M$ is the identity. [step 1.2, F1, F4]

3.1 Naturality and consequences. If $f:M\to M'$ is a $kH$-map, then for all $g,m,x$ one has $\Phi_{M'}(g\otimes f(m))(x)=f(\Phi_M(g\otimes m)(x))$, because the formula is evaluated by multiplication in $M$ or $M'$ and $f$ is linear; hence $\Phi$ is a natural transformation, and by steps 2.1 and 2.2 each $\Phi_M$ is an isomorphism with natural inverse $\Psi_M$. Therefore $\operatorname{Ind}_H^G\cong\operatorname{Coind}_H^G$ as functors, and [F2] yields that induction is both a left and a right adjoint of restriction: the left adjunction is its induction adjunction, and the right adjunction is transported across this natural isomorphism from the coinduction adjunction. Induction $-\otimes_{kH}kG$ is right exact, and coinduction $\operatorname{Hom}_{kH}(kG,-)$ is left exact; a natural isomorphism between the two functors therefore makes induction exact, in agreement with the freeness of $kG$ over $kH$ recorded in [F3]. No hypothesis on $k$, on characteristic, or on splitting is used, and the only selection made is the finite transversal $T$ of least representatives. [step 2.1, step 2.2, F2, F3] ∎

## Remarks

- **Freyd's adjoint functor heuristics.** The isomorphism is the finite-group
  relative Frobenius map; it is the reason the modular branching page can use
  the biadjunction of restriction, and the two adjunctions are *not*
  identified by hand: the right adjunction is obtained by transporting the
  coinduction adjunction along $\Phi$.
- **Finiteness of $G/H$ is what is used.** The argument needs the finiteness
  of $T$ in step 1.2 and the total vanishing of all but one term in steps 2.1
  and 2.2; for infinite $G/H$ these fail in general. The finite transversal
  is selected by least elements, so no choice principle enters.
