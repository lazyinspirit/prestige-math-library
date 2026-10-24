---
id: thm-valuative-criterion-separatedness
kind: theorem
title: Valuative uniqueness detects separatedness
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-valuative-diagram-separatedness, def-separated-morphism-schemes, def-diagonal-morphism-scheme, def-local-ring, def-residue-field-scheme-point, def-axiom-of-choice, lem-diagonal-is-immersion, lem-diagonal-quasi-compact-iff-quasi-separated, lem-separated-implies-valuative-uniqueness, lem-immersion-with-closed-image, lem-quasi-compact-immersion-boundary-specialization, lem-local-domain-dominated-by-valuation-overring, lem-field-valued-points-of-schemes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.22.2 (tag 01L0), printed p.44"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 13.7.4, printed p.383"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Example 29.52.2 (Tag 02NV), finite type need not be quasi-separated"
      url: "https://stacks.math.columbia.edu/tag/02NV"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be a quasi-separated morphism of
schemes. Then $f$ is separated if and only if every valuative diagram for $f$,
with an arbitrary valuation ring $R$ and fraction field $K$, has at most one
lift $\operatorname{Spec}R\to X$. The criterion asserts no existence. A
finite-type morphism is covered when it is also quasi-separated; finite type
alone does not imply quasi-separatedness over an arbitrary base.

## Facts & Assumptions

**Given:** A quasi-separated morphism $f:X\to S$ with diagonal $\Delta=\Delta_{X/S}:X\to P=X\times_SX$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A **valuative diagram** for $f$ consists of a valuation ring $R\subseteq K$ with fraction field $K$ together with $\operatorname{Spec}K\to X$ and $\operatorname{Spec}R\to S$ forming a commutative square; a **lift** is a compatible $\operatorname{Spec}R\to X$. ([[def-valuative-diagram-separatedness]])

[F2] $f$ is **separated** when $\Delta$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F3] If $f$ is separated, then every valuative diagram for $f$ has at most one lift. ([[lem-separated-implies-valuative-uniqueness]])

[F4] The diagonal $\Delta$ is an immersion, and a point of $P$ lies in $\Delta(X)$ exactly when the two projections carry it to one point $x\in X$ and induce one and the same map $\kappa(x)\to\kappa(z)$. ([[lem-diagonal-is-immersion]])

[F5] $f$ is quasi-separated if and only if $\Delta$ is quasi-compact. ([[lem-diagonal-quasi-compact-iff-quasi-separated]])

[F6] An immersion whose image is closed is a closed immersion. ([[lem-immersion-with-closed-image]])

[F7] Assume AC. A quasi-compact immersion $j$ with nonclosed image admits $\eta\in j(Z)$ and $t\in\overline{j(Z)}\setminus j(Z)$ with $t\in\overline{\{\eta\}}$. ([[lem-quasi-compact-immersion-boundary-specialization]])

[F8] Assume AC. A local subring $A\subseteq K$ of a field $K$ is dominated by a valuation ring $V\subseteq K$ with fraction field $K$. ([[lem-local-domain-dominated-by-valuation-overring]])

[F9] For a field $K$ and a scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond to pairs $(x,\iota)$ with $\iota:\kappa(x)\to K$; for a nonzero local ring $(R,\mathfrak m)$, morphisms $\operatorname{Spec}R\to X$ correspond to pairs $(x,\varphi)$ with a local homomorphism $\varphi:\mathcal O_{X,x}\to R$. ([[lem-field-valued-points-of-schemes]])

[F10] The residue field is $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, and for a point $\mathfrak p$ of an affine spectrum $\kappa(\mathfrak p)\cong\operatorname{Frac}(A/\mathfrak p)$; the local ring of $\mathfrak p$ is $A_{\mathfrak p}$. ([[def-residue-field-scheme-point]])

[F11] The diagonal satisfies $\operatorname{pr}_1\Delta=\operatorname{id}_X=\operatorname{pr}_2\Delta$, so it is injective on points. ([[def-diagonal-morphism-scheme]])

[F12] Domination means $A\subseteq V$ and $\mathfrak m_A=A\cap\mathfrak m_V$ for local rings contained in a field. ([[def-local-ring]])

## Proof

**Proof technique:** direct.

1.1 Since $f$ is quasi-separated, [F5] makes $\Delta$ quasi-compact, and [F4] makes it an immersion. [F4, F5, given]

2.1 If $f$ is separated, [F3] gives the uniqueness property for every valuative diagram; it remains to prove the converse. [F1, F3, step 1.1]

3.1 Assume now that every valuative diagram for $f$ has at most one lift, and suppose for contradiction that $\Delta(X)$ is not closed in $P$. By [F7], applied to the quasi-compact immersion $\Delta$ of step 1.1 under the Axiom of Choice, there are $z\in\Delta(X)$ and $t\in\overline{\Delta(X)}\setminus\Delta(X)$ with $t\in\overline{\{z\}}$. [F7, given, step 1.1, step 2.1]

4.1 By [F11] there is a unique $x_0\in X$ with $z=\Delta(x_0)$, and by the residue clause of [F4] the two projections induce one and the same isomorphism $\kappa(x_0)\to\kappa(z)$, whose inverse is induced by $\Delta$; so we may regard $K:=\kappa(z)$ as identified with $\kappa(x_0)$. [F4, F11, step 3.1]

5.1 Because $t\in\overline{\{z\}}$, every open neighbourhood of $t$ contains $z$; choose an affine open $W=\operatorname{Spec}R$ containing $t$, so $z\in W$. Writing $t\leftrightarrow\mathfrak p$ and $z\leftrightarrow\mathfrak q$, the relation $t\in\overline{\{z\}}$ is exactly $\mathfrak q\subseteq\mathfrak p$. By [F10] the local ring $\mathcal O_{P,t}$ is $R_{\mathfrak p}$ and $K=\kappa(z)=\operatorname{Frac}(R/\mathfrak q)$; the composite $R_{\mathfrak p}\to R_{\mathfrak p}/\mathfrak qR_{\mathfrak p}\subseteq\operatorname{Frac}(R/\mathfrak q)=K$ is a local ring map, its image $A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q}$ is a local subring of $K$, and the maximal ideal of $A$ is the image of $\mathfrak m_t=\mathfrak pR_{\mathfrak p}$. [F10, step 4.1]

6.1 By [F8] there is a valuation ring $V\subseteq K$ with fraction field $K$ dominating $A$ in the sense of [F12]; composing the local map $\mathcal O_{P,t}\to A\subseteq V$ with the inclusion gives a local homomorphism $\mathcal O_{P,t}\to V$, which by [F9] corresponds to a morphism $\operatorname{Spec}V\to P$. [F8, F9, F12, step 5.1]

7.1 Under that morphism the generic point of $\operatorname{Spec}V$ maps to $z$ and the closed point maps to $t$: by [F9] the morphism $\operatorname{Spec}V\to P$ built in step 6.1 corresponds to the pair consisting of the point $t$ and the local homomorphism $\mathcal O_{P,t}\to V$, so its closed point is $t$ and the induced residue-field map is the canonical one $\kappa(t)\to V/\mathfrak m_V$, which is injective because both sides are fields; the generic point is the image of the field-valued point $\operatorname{Spec}K\to\operatorname{Spec}V\to P$, whose local map $\mathcal O_{P,t}\to V\to K$ is the map of step 5.1 with kernel $\mathfrak qR_{\mathfrak p}$, so by [F9] and [F10] it is the point $z$ with residue field $\kappa(z)=K$. [F9, F10, step 5.1, step 6.1]

8.1 Let $a,b:\operatorname{Spec}V\to X$ be the composites of $\operatorname{Spec}V\to P$ with $\operatorname{pr}_1,\operatorname{pr}_2$, and let $i:\operatorname{Spec}K\to\operatorname{Spec}V$ be the canonical morphism. By step 7.1 the generic point of $\operatorname{Spec}V$ maps to $z$, so $a\circ i$ and $b\circ i$ correspond to the two maps $\kappa(x_0)\to\kappa(z)=K$, which coincide by step 4.1; hence $a\circ i=b\circ i$. Also $f\circ a=f\circ b$, since both are the structure map $\operatorname{Spec}V\to P\to S$. Thus the data form a valuative diagram for $f$ with generic map $a\circ i=b\circ i$ and two lifts $a,b$. [F1, step 4.1, step 7.1]

9.1 The two lifts are distinct: at the closed point of $\operatorname{Spec}V$ the maps $a,b$ take the values $\operatorname{pr}_1(t)$ respectively $\operatorname{pr}_2(t)$, and their residue-field maps to $V/\mathfrak m_V$ factor through the two maps into $\kappa(t)$ induced by the projections and the injective field map $\kappa(t)\to V/\mathfrak m_V$. Since $t\notin\Delta(X)$ the clause of [F4] fails for $t$: either $\operatorname{pr}_1(t)\ne\operatorname{pr}_2(t)$ as points of $X$, in which case $a,b$ differ at the closed point, or these points are equal to a point $x$ and the two induced maps of residue fields $\kappa(x)\to\kappa(t)$ differ, in which case composing with the injective map $\kappa(t)\to V/\mathfrak m_V$ shows that $a,b$ induce different residue-field maps at the closed point; in both cases the morphisms $a,b$ differ. This contradicts the assumed uniqueness for the diagram of step 8.1. [F4, step 7.1, step 3.1, step 8.1]

10.1 Therefore $\Delta(X)$ is closed in $P$. Since $\Delta$ is an immersion by step 1.1, [F6] makes $\Delta$ a closed immersion, and then [F2] says that $f$ is separated. [F2, F6, step 1.1, step 9.1]

11.1 Steps 2.1 and 10.1 prove the equivalence under AC; the Axiom of Choice was used exactly in the boundary specialization [F7] and the dominating valuation ring [F8], no existence of lifts was asserted, and the quantification over all valuation rings includes fields and non-Noetherian rank-one rings. [step 2.1, step 10.1] ∎
