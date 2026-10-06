---
id: prop-faithfully-flat-orbit-map-represents-coset-quotient
kind: proposition
title: "A faithfully flat orbit map represents the coset quotient sheaf"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-faithfully-flat-morphism-schemes, def-locally-finite-presentation-morphism, def-morphism-and-closed-subgroup-scheme, def-quotient-sheaf-and-representable-quotient, def-scheme-theoretic-fibre, lem-action-map-fibres-and-stabilizer-subscheme, lem-fppf-quotient-representability-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Propositions 7.11 and 7.17, printed pp. 141-143"
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Lemma 39.20.3"
---

## Statement

Assume the Axiom of Choice for the represented-sheaf and geometric suppliers
used on this page. Let $k$ be a field, let $G$ be a group scheme of finite type
over $k$ acting on a separated finite-type $k$-scheme $X$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]), let
$x\in X(k)$, and let $H$ be a closed subgroup scheme of $G$
([[def-morphism-and-closed-subgroup-scheme]]) with $H=G_x$
([[lem-action-map-fibres-and-stabilizer-subscheme]]). Assume the orbit map
$\varrho_x:G\to O_x$ is faithfully flat and locally of finite presentation,
where $O_x$ is the orbit subscheme. Then $O_x$ represents the fppf quotient
sheaf $G/H$ ([[def-quotient-sheaf-and-representable-quotient]]), the quotient
morphism is $\varrho_x$, and the kernel-pair morphism
$G\times_kH\to G\times_{O_x}G$, $(g,h)\mapsto(g,gh)$, is an isomorphism.

## Facts & Assumptions

**Given:** AC, the action of the finite-type $k$-group scheme $G$ on the
separated finite-type $k$-scheme $X$, the point $x\in X(k)$, the closed
subgroup scheme $H=G_x$, and the orbit subscheme $O_x$ with $\varrho_x$ faithfully
flat and locally of finite presentation.

[F1] Representability criterion: for a pre-relation $s,t:R\to U$ with fppf
quotient sheaf $U/R$ and a morphism $q:U\to M$, if $q\circ s=q\circ t$, if
$h_U\to h_M$ is a surjection of fppf sheaves, and if $(t,s):R\to U\times_MU$
induced by $h_R\to h_{U\times_MU}$ is a surjection of fppf sheaves, then $M$
represents $U/R$; a faithfully flat morphism locally of finite presentation
satisfies either surjectivity instance
([[lem-fppf-quotient-representability-criterion]]).

[F2] The stabilizer satisfies $H(R)=\{g\in G(R):gx_R=x_R\}$ for every
$k$-algebra $R$, and if the orbit map factors through the locally closed orbit
subscheme $O_x$, the morphism $G\times_kH\to G\times_{O_x}G$,
$(g,h)\mapsto(g,gh)$, is an isomorphism
([[lem-action-map-fibres-and-stabilizer-subscheme]]).

[F3] For the pre-relation $R=G\times_kH\rightrightarrows U=G$ with
$s(g,h)=g$ and $t(g,h)=gh$, the associated fppf quotient sheaf is $G/H$
([[def-quotient-sheaf-and-representable-quotient]]).

## Proof

**Given:** AC, the action of $G$ on $X$, the point $x\in X(k)$, the closed
subgroup scheme $H=G_x$, and $\varrho_x:G\to O_x$ faithfully flat and locally of
finite presentation.

1.1 Set $U=G$ and $R=G\times_kH$, with $s(g,h)=g$ and $t(g,h)=gh$; by [F3] the fppf quotient sheaf $U/R$ is exactly $G/H$. [F3, given, construct]

1.2 Condition (1) of the criterion holds: for every $k$-algebra $R$ and every $(g,h)\in G(R)\times H(R)$ one has $\varrho_x(s(g,h))=\varrho_x(g)=gx$ and $\varrho_x(t(g,h))=\varrho_x(gh)=g(hx)=gx$, because $h$ lies in $H(R)$ and $H(R)=\{u:ux_R=x_R\}$ by [F2]. [F2, given, algebra]

1.3 Condition (2) of the criterion holds: $\varrho_x$ is faithfully flat and locally of finite presentation, so as a singleton family it is an fppf covering and $h_G\to h_{O_x}$ is a surjection of fppf sheaves by the instance recorded in [F1]. [F1, given]

1.4 Condition (3) of the criterion holds: by [F2] the morphism $G\times_kH\to G\times_{O_x}G$, $(g,h)\mapsto(g,gh)$, is an isomorphism; the morphism $(t,s)$ of the criterion is $(g,h)\mapsto(gh,g)$, which is the composite of that isomorphism with the factor swap on the target, so it is also an isomorphism, in particular a surjection of fppf sheaves. [F2, given, construct]

2.1 Applying the criterion [F1] to $U=G$, $R=G\times_kH$, $q=\varrho_x$ and $M=O_x$ using steps 1.2, 1.3 and 1.4 shows that $O_x$ represents the fppf quotient sheaf $G/H$, with quotient morphism $\varrho_x$; the kernel-pair statement is step 1.4. This is exactly the assertion. [F1, step 1.1, step 1.2, step 1.3, step 1.4, given] ∎ 