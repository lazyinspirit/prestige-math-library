---
id: lem-equivalences-preserve-progenerators
kind: lemma
title: "Equivalences preserve small projective generators"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [def-small-projective-generator-and-progenerator, def-equivalence-and-adjoint-equivalence-of-categories, prop-equivalences-preserve-reflect-and-create-limits-and-colimits, thm-an-equivalence-between-abelian-categories-is-exact, thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms, thm-projective-object-characterisations, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, def-the-axioms-ab3-and-ab3-star, def-small-finite-and-large-limits-completeness-and-cocompleteness, thm-every-equivalence-can-be-made-an-adjoint-equivalence, def-adjunction-by-unit-counit-and-triangle-identities, thm-the-adjunction-hom-set-bijection-under-local-smallness, def-adjunct-and-transposition-under-an-adjunction]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12 (Morita theorem: an equivalence is represented by a finitely generated projective generator)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "nLab, Morita equivalence, Classical Morita theorem (equivalences and finitely generated projective generators)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be an equivalence of locally small abelian categories, with $\mathcal C$ cocomplete and $P$ an object of $\mathcal C$. Then $P$ is a small projective generator of $\mathcal C$ if and only if $F(P)$ is a small projective generator of $\mathcal D$; in that case $\mathcal D$ is cocomplete. No choice and no commutativity assumption are used.

## Facts & Assumptions

**Given:** An equivalence $F:\mathcal C\to\mathcal D$ of locally small abelian categories with $\mathcal C$ cocomplete, and an object $P$ of $\mathcal C$.

[F1] A small projective generator of a locally small cocomplete abelian category is an object that is projective, is a generator, and whose representable functor preserves every set-indexed coproduct ([[def-small-projective-generator-and-progenerator]]).

[F2] An equivalence consists of $F$ and a quasi-inverse $G$ with natural isomorphisms $\eta:1_{\mathcal C}\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_{\mathcal D}$, and can be equipped as an adjoint equivalence satisfying the triangle identities $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$ and $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$ ([[def-equivalence-and-adjoint-equivalence-of-categories]], [[thm-every-equivalence-can-be-made-an-adjoint-equivalence]], [[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F3] An equivalence preserves and reflects every existing limit and colimit ([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

[F4] Every equivalence between abelian categories is exact, hence preserves epimorphisms ([[thm-an-equivalence-between-abelian-categories-is-exact]], [[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]).

[F5] An object is projective exactly when every epimorphism onto it splits ([[thm-projective-object-characterisations]]).

[F6] In a locally small abelian category satisfying AB3, an object is a generator exactly when its representable functor is faithful ([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]); AB3 is cocompleteness in this setting ([[def-the-axioms-ab3-and-ab3-star]], [[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F7] Under an adjunction $F\dashv G$ between locally small categories the transposition $\Phi_{c,d}:\mathcal D(Fc,d)\to\mathcal C(c,Gd)$, $\Phi_{c,d}(w)=G(w)\circ\eta_c$, is a natural bijection with inverse $v\mapsto\varepsilon_d\circ F(v)$ ([[def-adjunct-and-transposition-under-an-adjunction]], [[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 (Set-up.) Equip $F$ with the adjoint-equivalence data $F\dashv G$, $\eta$, $\varepsilon$ of [F2]; then $F$ and $G$ preserve and reflect all existing colimits by [F3] and preserve epimorphisms by [F4], and the transposition $\Phi_{c,d}$ of [F7] is a natural bijection for all $c\in\mathcal C$, $d\in\mathcal D$. The same properties hold for the equivalence $G$, whose quasi-inverse is $F$, with unit $\varepsilon^{-1}$ and counit $\eta^{-1}$, and with transposition $\mathcal C(Gd,c)\cong\mathcal D(d,Fc)$. [F2, F3, F4, F7, given]

2.1 (Forward: projectivity transfers.) Assume $P$ is projective, let $q:E\twoheadrightarrow M$ be an epimorphism in $\mathcal D$ and $f:F(P)\to M$. Then $G(q)$ is an epimorphism, and $G(f)\circ\eta_P:P\to G(M)$ is a map, so by projectivity of $P$ and [F5] there is $s:P\to G(E)$ with $G(q)\circ s=G(f)\circ\eta_P$. Put $t:=\varepsilon_E\circ F(s):F(P)\to E$. Using naturality of $\varepsilon$ at $f$, naturality of $\eta$ at $s$, and the triangle identity $\varepsilon_{F(P)}\circ F(\eta_P)=1_{F(P)}$, one computes $q\circ t=\varepsilon_M\circ F(G(q)\circ s)=\varepsilon_M\circ F(G(f)\circ\eta_P)=f\circ\varepsilon_{F(P)}\circ F(\eta_P)=f$. Hence every epimorphism onto $F(P)$ splits, so $F(P)$ is projective by [F5]. [F5, step 1.1, given, algebra]

2.2 (Forward: coproduct preservation transfers.) Assume $\mathcal C(P,-)$ preserves set-indexed coproducts. For every set-indexed family $(Y_i)$ in $\mathcal D$, the natural bijection [F7] and preservation of coproducts by $G$ give natural bijections $\mathcal D(F(P),\coprod_iY_i)\cong\mathcal C(P,G(\coprod_iY_i))\cong\mathcal C(P,\coprod_iG(Y_i))\cong\bigoplus_i\mathcal C(P,G(Y_i))\cong\bigoplus_i\mathcal D(F(P),Y_i)$; all stages are natural in the family, so the canonical comparison $\bigoplus_i\mathcal D(F(P),Y_i)\to\mathcal D(F(P),\coprod_iY_i)$ is an isomorphism of abelian groups, since the adjoint transpositions are additive by [F4] and their formulas in [F7], which is exactly preservation of this coproduct. [F1, F7, step 1.1, given]

2.3 (Forward: the generator condition transfers.) Assume $\mathcal C(P,-)$ is faithful, and let $u\neq v:X\to Y$ in $\mathcal D$. Since $G$ is faithful (as part of the equivalence), $G(u)\neq G(v)$; by faithfulness of $\mathcal C(P,-)$ there is $h:P\to G(X)$ with $G(u)\circ h\neq G(v)\circ h$. Let $h^{\sharp}:=\varepsilon_X\circ F(h):F(P)\to X$ be the transpose of $h$ under [F7]. By the formula $\Phi_{P,Y}(w)=G(w)\circ\eta_P$ and naturality of $\eta$ at $h$, $\Phi_{P,Y}(u\circ h^{\sharp})=G(u)\circ G(\varepsilon_X)\circ GF(h)\circ\eta_P=G(u)\circ G(\varepsilon_X)\circ\eta_{G(X)}\circ h=G(u)\circ h$, and likewise for $v$, using the triangle identity $G(\varepsilon_X)\circ\eta_{G(X)}=1_{G(X)}$. Since $\Phi_{P,Y}$ is injective, $u\circ h^{\sharp}\neq v\circ h^{\sharp}$, so $\mathcal D(F(P),-)$ is faithful and $F(P)$ is a generator by [F6]. [F6, F7, step 1.1, given]

2.4 (Forward: the target is cocomplete.) Let $X:J\to\mathcal D$ be any small diagram and let $(L,\lambda)$ be a colimiting cocone of the composite diagram $G\circ X$ in $\mathcal C$, which exists because $\mathcal C$ is cocomplete; no choice is needed because the argument verifies any such cocone. Then $F(L)$ with the cocone $F\lambda:FGX\Rightarrow\Delta F(L)$ is a colimit of $FGX$ by [F3], and the counit $\varepsilon$ is a natural isomorphism $FG\Rightarrow1_{\mathcal D}$, so the legs $F(\lambda_j)\circ\varepsilon_{X(j)}^{-1}$ give a colimiting cocone of $X$ with apex $F(L)$. Hence every small diagram in $\mathcal D$ has a colimit, and $\mathcal D$ is cocomplete. [F2, F3, step 1.1, given]

3.1 (Forward conclusion.) Under the assumption that $P$ is a small projective generator of $\mathcal C$, steps 2.1, 2.2 and 2.3 show that $F(P)$ is projective, that $\mathcal D(F(P),-)$ preserves every set-indexed coproduct, and that it is faithful, while step 2.4 shows $\mathcal D$ is cocomplete; by [F1] and [F6] the object $F(P)$ is a small projective generator of $\mathcal D$. [F1, F6, step 2.1, step 2.2, step 2.3, step 2.4]

4.1 (Converse.) Assume $\mathcal D$ is cocomplete and $Q:=F(P)$ is a small projective generator of $\mathcal D$. The argument of steps 2.1-2.4 applies to the equivalence $G:\mathcal D\to\mathcal C$, whose source $\mathcal D$ is now cocomplete, and shows that $G(Q)=GF(P)$ is a small projective generator of $\mathcal C$. The unit $\eta_P:P\to GF(P)$ is an isomorphism and induces a natural isomorphism $\mathcal C(GF(P),-)\cong\mathcal C(P,-)$, $\psi\mapsto\psi\circ\eta_P$; consequently faithfulness, preservation of coproducts, and the splitting characterization of projectivity transfer along it (for projectivity, transport a map $P\to M$ and its lift through $\eta_P$ and $\eta_P^{-1}$). Hence $P$ is itself a small projective generator of $\mathcal C$. [F1, F5, step 1.1, step 3.1, given]

5.1 Steps 3.1 and 4.1 prove the two implications, and step 2.4 supplies the cocompleteness of $\mathcal D$ in the case where the properties hold; no commutativity of rings is involved and the only selections are the pointwise existentials supplied by the given lifting property and by cocompleteness, so no choice principle is used. [step 2.1, step 2.2, step 2.3, step 2.4, step 3.1, step 4.1] ∎
