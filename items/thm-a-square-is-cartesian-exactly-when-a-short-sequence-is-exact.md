---
id: thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact
kind: theorem
title: "A square is cartesian exactly when a short sequence is exact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,
       def-pullbacks-and-pushouts,
       def-biproduct,
       thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation,
       thm-degenerate-exactness-criteria]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.11(1)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Lemma 7.17"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

Consider a commutative square in an abelian category

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & Y \arrow[d, "g"] \\
X \arrow[r, "f"'] & Z.
```

Then the square is cartesian if and only if the sequence
$$0 \to P \xrightarrow{\binom{\alpha}{\beta}} X \oplus Y \xrightarrow{(f,-g)} Z$$
is exact.

## Facts & Assumptions

**Given:** The displayed commutative square.

[L1] Pullbacks are defined by the usual universal property
([[def-pullbacks-and-pushouts]]).

[L2] In a biproduct, a morphism into $X \oplus Y$ is determined by its two
projections, and
$$i_X p_X + i_Y p_Y = 1_{X \oplus Y}$$
([[def-biproduct]],
[[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

[L3] Exactness of
$0 \to P \to X \oplus Y \to Z$
is equivalent to the first map being a kernel of the second
([[thm-degenerate-exactness-criteria]],
[[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume the square is cartesian. Then $(f,-g)\binom{\alpha}{\beta} = f \alpha - g \beta = 0$. If $u:U \to X \oplus Y$ satisfies $(f,-g)u = 0$, write $x := p_X u$ and $y := p_Y u$. Then $f x = g y$, so the pullback property [L1] gives a unique $t:U \to P$ with $\alpha t = x$ and $\beta t = y$. By [L2], this implies $\binom{\alpha}{\beta} t = u$, so $\binom{\alpha}{\beta}$ is a kernel of $(f,-g)$ and the sequence is exact by [L3]. [L1, L2, L3, assume-hyp, algebra]

1.2 Assume the sequence is exact. Then [L3] says $\binom{\alpha}{\beta}$ is a kernel of $(f,-g)$, so the square commutes. Given $x:U \to X$ and $y:U \to Y$ with $f x = g y$, define $u := i_X x + i_Y y$. By [L2], $(f,-g)u = f x - g y = 0$, so the kernel property gives a unique $t:U \to P$ with $\binom{\alpha}{\beta} t = u$. Applying $p_X$ and $p_Y$ yields $\alpha t = x$ and $\beta t = y$, proving the pullback property. [L1, L2, L3, assume-hyp, construct, algebra]

2.1 Therefore the square is cartesian exactly when the displayed sequence is exact. [step 1.1, step 1.2] ∎
