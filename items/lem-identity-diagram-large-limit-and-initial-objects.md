---
id: lem-identity-diagram-large-limit-and-initial-objects
kind: lemma
title: "A cone over an identity diagram is weakly initial, and the identity diagram has a limit exactly when the category has an initial object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Lemma 3.7.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

A cone $\lambda:\Delta L\Rightarrow 1_{\mathcal C}$ supplies a morphism from
$L$ to every object of $\mathcal C$, so $L$ is weakly initial. The possibly
large identity diagram $1_{\mathcal C}:\mathcal C\to\mathcal C$ has a limit if
and only if $\mathcal C$ has an initial object; in that event every limiting
apex is initial.

## Facts & Assumptions

**Given:** A category $\mathcal C$ and its identity diagram.

[F1] Completeness concerns all small diagrams and makes no assertion about a
large identity diagram ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] An initial object $I$ has exactly one morphism $I\to C$ for every object
$C$ ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** universal property.

1.1 A cone $\lambda$ has a leg $\lambda_C:L\to C$ for every object $C$, so its apex is weakly initial. [given]

1.2 Suppose $\lambda$ is limiting. Both $1_L$ and $\lambda_L$ are morphisms from the cone $\lambda$ to itself, because naturality gives $\lambda_C\lambda_L=\lambda_C$. Limit uniqueness yields $\lambda_L=1_L$. [given]

1.3 Conversely, let $I$ be initial. The unique maps $i_C:I\to C$ form a cone: for $f:C\to C'$, both $fi_C$ and $i_{C'}$ are maps $I\to C'$, hence equal by [F2]. [F2]

2.1 For any $f:L\to C$, cone naturality for $f$ says $f\lambda_L=\lambda_C$. By step 1.2, $f=\lambda_C$. Thus exactly one morphism $L\to C$ exists, and [F2] makes $L$ initial. [F2, step 1.2]

2.2 For any cone $\xi:\Delta X\Rightarrow1_{\mathcal C}$, take $u:=\xi_I:X\to I$. Naturality along $i_C:I\to C$ gives $i_Cu=\xi_C$. If $v:X\to I$ is another cone morphism, its equation at $I$ is $i_Iv=\xi_I$; since $i_I=1_I$, $v=u$. The cone of step 1.3 is limiting. [F2, step 1.3]

3.1 Steps 1.2, 2.1, 1.3, and 2.2 prove both directions. If $\mathcal C$ is large, [F1] explains why this conclusion is not supplied merely by completeness. [F1, step 2.1, step 2.2] ∎
