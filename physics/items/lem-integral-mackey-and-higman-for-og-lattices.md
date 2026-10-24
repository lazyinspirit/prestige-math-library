---
id: lem-integral-mackey-and-higman-for-og-lattices
kind: lemma
title: Integral Mackey decomposition and Higman's criterion for group lattices
status: published
origin: pipeline
deps: [def-relative-projectivity-and-vertices-for-og-lattices, thm-krull-schmidt-for-og-lattices]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Proposition 2.3 and sections 2.1–2.2, pp. 19–22; Proposition 3.11, p. 36"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Statement

Let $(K,\mathcal O,k)$ be a splitting $p$-modular system and let $H$ be
finite.

For subgroups $A,B\leq H$ and an $\mathcal O B$-lattice $V$, with
$L_x=A\cap xBx^{-1}$, there is a natural Mackey decomposition

$$\operatorname{Res}_A^H\operatorname{Ind}_B^H V \cong\bigoplus_{x\in A\backslash H/B} \operatorname{Ind}_{L_x}^A \left({}^x\operatorname{Res}_{B\cap x^{-1}Ax}^B V\right).$$

Induction is transitive and preserves finite-free lattices and direct
summands. For an $\mathcal O H$-lattice $M$ and $Q\leq H$, define

$$\operatorname{Tr}_Q^H(\alpha)= \sum_{t\in H/Q}t\alpha t^{-1} \quad(\alpha\in\operatorname{End}_{\mathcal O Q}(M)).$$

Then $M$ is relatively $Q$-projective if and only if
$\operatorname{id}_M=\operatorname{Tr}_Q^H(\alpha)$ for some $\alpha$. If
$M$ is nonzero indecomposable, is relatively $R$-projective, and $P$ is a
vertex of $M$, then $P$ is contained in an $H$-conjugate of $R$.

## Facts & Assumptions

**Given:** The modular system, finite groups, subgroups, and finite-free lattices in the Statement.

[F1] Relative projectivity and vertices for these lattices are defined by the induction-summand condition ([[def-relative-projectivity-and-vertices-for-og-lattices]]).

[F2] A nonzero indecomposable $\mathcal O H$-lattice has a local endomorphism ring ([[thm-krull-schmidt-for-og-lattices]]).

## Proof

1.1 Decompose $H$ into its finite $A$-$B$ double cosets. The summand of $\mathcal OH\otimes_{\mathcal OB}V$ supported on $AxB$ is identified with $$\mathcal OA\otimes_{\mathcal O L_x}{}^xV, \qquad a\otimes v\longmapsto ax\otimes v,$$ where $q\in L_x$ acts on ${}^xV$ as $x^{-1}qx$ acts on $V$. These maps and their inverses are well-defined on the tensor relations, and their finite direct sum is the displayed Mackey isomorphism. Tensor associativity gives $\operatorname{Ind}_A^H\operatorname{Ind}_B^A \cong\operatorname{Ind}_B^H$ for $B\leq A\leq H$. Since $\mathcal OH$ is finite free as a right subgroup algebra, these operations preserve finite-free lattices; functoriality preserves split inclusions and retractions. [F1, algebra]

1.2 First connect F1's summand definition to a split induction counit.  Put $Y=\operatorname{Ind}_Q^H V=\mathcal OH\otimes_{\mathcal OQ}V$.  The counit $\varepsilon_Y:\operatorname{Ind}_Q^H\operatorname{Res}_Q^H Y\to Y$ has the explicit $H$-linear section $$s_Y(h\otimes v)=h\otimes(1\otimes v).$$ It respects the relation $hq\otimes v=h\otimes qv$ because $q\otimes v=1\otimes qv$ in $Y$, and $\varepsilon_Ys_Y=1_Y$.  If $M$ is a summand of $Y$ with inclusion $i:M\to Y$ and retraction $r:Y\to M$, then $$s_M=(\operatorname{Ind}_Q^H\operatorname{Res}_Q^H r)\,s_Yi$$ splits the counit for $M$, by naturality of the counit and $ri=1_M$. Conversely, a split counit displays $M$ as a summand of its induced module. Now let $T$ be left-coset representatives for $H/Q$.  The induction counit $\varepsilon:\mathcal OH\otimes_{\mathcal OQ}M\to M$ is $\varepsilon(h\otimes m)=hm$.  Given an $H$-linear section $s$, write $s(m)$ in the direct sum indexed by $T$ and let $\alpha(m)$ be its coefficient in the identity-coset component. Equivariance makes $\alpha$ $Q$-linear, and $\varepsilon s=1$ says $$1_M=\sum_{t\in T}t\alpha t^{-1}=\operatorname{Tr}_Q^H(\alpha).$$ Conversely this trace identity makes $s(m)=\sum_{t\in T}t\otimes\alpha(t^{-1}m)$ an $H$-linear section of $\varepsilon$. This proves the integral Higman criterion. [F1, algebra]

2.1 The image of every relative trace is a two-sided ideal of $E=\operatorname{End}_{\mathcal OH}(M)$: an $H$-endomorphism can be moved inside either side of the finite trace sum. Suppose now that $M$ is indecomposable, relatively $P$-projective and relatively $R$-projective. By step 1.2 choose trace expressions for $1_M$ from $P$ and from $R$ and multiply them. The diagonal $H$-orbits on the finite set $H/P\times H/R$ regroup the product as a finite sum of relative traces from their stabilizers $$sPs^{-1}\cap tRt^{-1}.$$ The element inside each orbit trace is fixed by that stabilizer, so every summand belongs to the corresponding trace ideal. [step 1.2, algebra]

3.1 By F2 the ring $E$ is local. If every summand from step 2.1 were a nonunit, their sum could not be $1_M$; hence one is a unit. Its two-sided trace ideal then contains $1_M$, and step 1.2 makes $M$ relatively projective for the associated intersection. Conjugating that subgroup by $s^{-1}$ shows that $M$ is relatively $P\cap s^{-1}tRt^{-1}s$, a subgroup of $P$. If $P$ is a vertex, its minimality forces this intersection to be $P$. Thus $P\leq s^{-1}tRt^{-1}s$, as required. Empty double-coset sets cannot occur because $H$ is nonempty; trivial subgroups and $P=1$ are included. All coset sets and sums are finite, so no choice principle is used. [F1, F2, step 1.2, step 2.1] ∎