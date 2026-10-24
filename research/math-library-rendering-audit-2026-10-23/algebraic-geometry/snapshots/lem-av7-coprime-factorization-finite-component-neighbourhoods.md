---
id: lem-av7-coprime-factorization-finite-component-neighbourhoods
kind: lemma
title: Finite fibre components after an elementary etale change
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [def-axiom-of-choice, lem-av7-zero-dimensional-standard-smooth-local-tools, lem-av7-relative-integral-closure-finite-affine-charts, thm-algebraic-zariski-main-localization, thm-integrality-and-finite-module-equivalences, thm-lying-over, thm-structure-theorem-for-artinian-rings, def-ag-standard-smooth-algebra, cor-inverse-matrix-by-adjugate, thm-rank-nullity]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-av7-coprime-factorization-finite-component-neighbourhoods and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-1; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"9ae610551549e4419dc39ea1370cedceafdc7785e31964d6658656e726ca59d2","evidence":["research/frontier-38-owner-30-reader-1.md","research/frontier-38-owner-30-reader-findings-1.json","research/frontier-38-owner-30-dispatch/reader-reader-1.result.json","research/frontier-38-owner-30-step5-hash-1-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-av7-coprime-factorization-finite-component-neighbourhoods.md","historical_raw_sha256":"f51df92b25017779b27e6c8575ad475fcd07e4acd62716da09e41450cdb2c499","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:41:54.938Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Stacks Project, coprime polynomial factorization after etale change
      url: https://stacks.math.columbia.edu/tag/00UH
    - title: Stacks Project, finite components around isolated fibre points
      url: https://stacks.math.columbia.edu/tag/00UJ
    - title: Stacks Project, separated finite-component decomposition
      url: https://stacks.math.columbia.edu/tag/02LN
---

## Statement

Assume AC, let $k$ be algebraically closed, and let $f:X\to Y$ be separated and of finite type between classical varieties, with finite fibres. For a point $y\in Y$ and distinct points $x_1,\ldots,x_n\in f^{-1}(y)$ there is an elementary etale change $(T,t)\to(Y,y)$ and an open-and-closed decomposition
$$ X\times_Y T=W\sqcup V_1\sqcup\cdots\sqcup V_n $$
such that each $V_i\to T$ is finite, its fibre over $t$ is the singleton mapping to $x_i$, and $W_t$ contains none of those selected points. Fibres here retain their finite local algebras, not just their reduced point sets. Taking all points of $f^{-1}(y)$ makes $W_t$ empty.

## Facts & Assumptions

**Given:** AC, $k$, the morphism and the finite selected list. The elementary changes are the square-Jacobian changes defined and proved in [[lem-av7-zero-dimensional-standard-smooth-local-tools]].

[F1] These changes are flat, open, stable under base change and composition, have the chosen residue field $k$, and preserve reduced varieties ([[lem-av7-zero-dimensional-standard-smooth-local-tools]]).

[F2] On affine charts the relative integral closure is finite, and CA-20 gives $g$ in that closure, avoiding a selected quasi-finite prime, with equal localized rings ([[lem-av7-relative-integral-closure-finite-affine-charts]], [[thm-algebraic-zariski-main-localization]]).

[F3] Finite-dimensional algebras split into their local Artinian factors; finite algebras are integral and integral maps are closed by lying over on quotient rings ([[thm-structure-theorem-for-artinian-rings]], [[thm-integrality-and-finite-module-equivalences]], [[thm-lying-over]]).

[F4] In a square matrix, a unit determinant gives the adjugate inverse; over a field an injective linear map between equal finite dimensions is invertible ([[cor-inverse-matrix-by-adjugate]], [[thm-rank-nullity]]). The full square-Jacobian presentation is the relative-dimension-zero case of [[def-ag-standard-smooth-algebra]]. AC is assumed ([[def-axiom-of-choice]]).

## Proof

1.1 First lift a monic coprime factorization $\bar P=\bar I\bar H$ over $k$, of positive degrees $r,s$, for a monic $P\in A[T]$. Introduce the $r+s$ coefficients of monic universal factors $I,H$ and impose the $r+s$ coefficient equations $IH=P$. Their square Jacobian acts by $(\delta I,\delta H)\mapsto H\delta I+I\delta H$, with $\deg\delta I<r$, $\deg\delta H<s$. At the chosen coprime factors its kernel is zero: the equation implies $\bar H$ divides $\delta H$, hence $\delta H=0$, and then $\delta I=0$. Invert the Jacobian determinant $d$. The resulting algebra $E$ is a square-Jacobian algebra, giving an elementary change by [F1] and [F4]. Substitution of the chosen coefficients gives a point $t$ with residue field $k$. The same invertible matrix solves $aI+bH=1$, so the factors are coprime over $E$. This construction works over any finite-type $k$-base and is compatible with restriction. [F1, F4, construct, algebra]

1.2 For one selected point choose affine charts $\operatorname{Spec}S\subseteq X$ and $\operatorname{Spec}A\subseteq Y$ around it and its image. Put $C=\operatorname{Int}_A(S)$, finite by [F2]. At the selected maximal ideal CA-20 gives $g\in C$ with $C_g=S_g$. The selected point of the finite fibre of $C$ is isolated, and is the only source fibre point above it, because $g$ is nonzero there and identifies the two open fibre neighbourhoods. In the Artinian ring $C\otimes_A k$, take the idempotent equal to $1$ on that local factor and $0$ on every other factor, and lift it to $c\in C$; the residue field is $k$, so the quotient map onto this fibre is surjective. Choose monic $P$ with $P(c)=0$, multiply it by $T$ if necessary, and factor $\bar P=T^e\bar H$ with $e\ge1$ and $\bar H(0)\ne0$. The selected value of $c$ is $1$, so $\bar H(1)=0$ and $\deg\bar H\ge1$. [F2, F3, construct, algebra]

2.1 Apply step 1.1 to $T^e\bar H$, obtaining $E$ and coprime monic factors $I,H$. In $E\otimes_A C$ and $E\otimes_A S$, the equations $I(c)H(c)=0$ and $a(c)I(c)+b(c)H(c)=1$ give compatible product decompositions. The factor where $I(c)$ is invertible, equivalently the quotient by $H(c)$, has just the selected point over $t$: on the fibre $c$ equals $1$ on the selected local factor and $0$ elsewhere, so $I(c)$ equals $1$ there and is nilpotent on the other factors. Let $C_1$ and $S_1$ be these factors. The ring $C_1$ is finite over $E$. Its closed locus $V(g)$ has closed image in $\operatorname{Spec}E$ by [F3], and that image omits $t$. Shrink to a principal neighbourhood of $t$ avoiding this image. Then $g$ is a unit in $C_1$, and also in $S_1$. The equality $C_g=S_g$ base changes and takes factors to give $(C_1)_g=(S_1)_g$, hence $C_1=S_1$. Thus $\operatorname{Spec}S_1$ is an open neighbourhood in the changed affine source, finite over the new base, with the required singleton chosen fibre. [F1, F2, F3, step 1.1, step 1.2, algebra, construct]

3.1 This finite open neighbourhood $V$ is also closed in the entire changed source $X_T$. The finite map $V\to T$ is universally closed: tensoring its finite algebras by any base algebra stays finite and lying over on quotients proves closedness. The graph of $V\hookrightarrow X_T$ is closed in $V\times_T X_T$ by separatedness of $X_T\to T$, and projection of the graph to $X_T$ is closed by universal closedness of $V\to T$. Hence $V$ is open and closed. This argument uses separatedness exactly here. [given, F1, F3, step 2.1, algebra]

4.1 Induct on the selected list. The first construction gives a clopen finite piece for $x_1$. In its clopen complement select the lift of $x_2$, apply the constructions of steps 1.2, 2.1 and 3.1 again, and base change the previous pieces. The lift of each $x_i$ is unique with unchanged residue field, because $k\otimes_k k=k$. By [F1] the composite base change is still elementary and the previous pieces remain clopen and finite. At each step the new piece has only its selected point in the chosen fibre, so it does not remove a later selected point. After finitely many steps the clopen complement $W$ has exactly the stated fibre exclusion. The empty list uses the identity change and $W=X$. If every fibre point was selected, the complement fibre is empty. No perfectness or source normality is used. [F1, F3, step 1.2, step 2.1, step 3.1, construct] ∎
