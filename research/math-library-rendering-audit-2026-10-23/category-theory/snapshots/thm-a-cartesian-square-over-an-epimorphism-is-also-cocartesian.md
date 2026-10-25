---
id: thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian
kind: theorem
title: "A cartesian square over an epimorphism is also cocartesian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
       thm-degenerate-exactness-criteria,
       def-pullbacks-and-pushouts,
       def-biproduct]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.13"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Corollary 7.18"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

In an abelian category, if

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & Y \arrow[d, "e"] \\
X \arrow[r, "f"'] & Z
```

is a cartesian square and $e$ is epic, then the square is also cocartesian.

## Facts & Assumptions

**Given:** The displayed cartesian square, with $e$ epic.

[L1] The square is a pullback exactly when $$0 \to P \xrightarrow{\binom{\alpha}{\beta}} X \oplus Y \xrightarrow{(f,-e)} Z$$ is exact ([[thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact]]).

[L2] In an abelian category, an exact sequence $$A \to B \to C \to 0$$ is exactly one in which the last map is a cokernel of the first ([[thm-degenerate-exactness-criteria]]).

[L3] Pushouts are defined by the usual colimit universal property ([[def-pullbacks-and-pushouts]]).

[L4] The biproduct $X \oplus Y$ carries the usual injections from $X$ and $Y$ ([[def-biproduct]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the cartesian hypothesis makes $$0 \to P \xrightarrow{\binom{\alpha}{\beta}} X \oplus Y \xrightarrow{v} Z$$ exact, where $v := (f,-e)$. If $r,s:Z \to T$ satisfy $r v = s v$, then $r e = -r v\,i_Y = -s v\,i_Y = s e$, so the epicity of $e$ gives $r=s$. Thus $v$ is epic, and the sequence $$P \xrightarrow{\binom{\alpha}{\beta}} X \oplus Y \xrightarrow{v} Z \to 0$$ is exact. [L1, given, L4, algebra]

2.1 By [L2], the map $v$ is a cokernel of $\binom{\alpha}{\beta}$. Now let $x:X \to T$ and $y:Y \to T$ satisfy $x \alpha = y \beta$. By the coproduct side of [L4], there is a unique morphism $w:X \oplus Y \to T$ with $w i_X = x$ and $w i_Y = -y$. Then $$w\binom{\alpha}{\beta} = x \alpha - y \beta = 0,$$ so the cokernel property gives a unique $u:Z \to T$ with $u v = w$. Composing with $i_X$ and $i_Y$ yields $$u f = u v i_X = w i_X = x,\qquad u e = -u v i_Y = -w i_Y = y.$$ This is exactly the pushout universal property from [L3]. [L2, L3, L4, step 1.1, construct, algebra]

3.1 Therefore every pullback square over an epimorphism is also a pushout square. [step 2.1] ∎
