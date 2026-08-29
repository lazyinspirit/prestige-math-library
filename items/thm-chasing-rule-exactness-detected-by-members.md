---
id: thm-chasing-rule-exactness-detected-by-members
kind: theorem
title: "Exactness is detected by members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exactness-at-a-node,
       thm-the-subobject-inequalities-underlying-exactness,
       thm-members-modulo-equivalence-correspond-to-subobjects,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
       def-pullbacks-and-pushouts,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(v)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For a composable pair
$$A\xrightarrow{f}B\xrightarrow{g}C$$
in an abelian category, the following are equivalent:

1. the pair is exact at $B$;
2. $g f = 0$, and for every member $y:Y \to B$ with $g y \equiv 0$ there
   exists a member $x:X \to A$ with
   $$f x \equiv y.$$

## Facts & Assumptions

**Given:** The composable pair $A \xrightarrow{f} B \xrightarrow{g} C$.

[L1] Exactness at $B$ is the equality
$[\operatorname{im}(f)] = [\ker(g)]$
([[def-exactness-at-a-node]]).

[L2] The subobject inequalities underlying exactness are exactly the two
factorization statements for morphisms killed by $g$
([[thm-the-subobject-inequalities-underlying-exactness]]).

[L3] Members modulo equivalence correspond to subobjects
([[thm-members-modulo-equivalence-correspond-to-subobjects]]).

[L4] Pullbacks of epimorphisms are epimorphisms
([[def-pullbacks-and-pushouts]],
[[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[L5] Every morphism admits an image factorization
([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Assume the pair is exact at $B$, and let $y:Y \to B$ satisfy $g y \equiv 0$. Choose an epic $u:W \to Y$ with $g y u = 0$. If $A \xrightarrow{e} I \xrightarrow{m} B$ is an image factorization of $f$, then exactness and [L2] give a map $w:W \to I$ with $m w = y u$. [L1, L2, L5, assume-hyp, choose]

1.2 Assume condition 2. For any $u:U \to B$ with $g u = 0$, we have $g u \equiv 0$, so condition 2 gives a member $x:X \to A$ with $f x \equiv u$. By [L3], the members $f x$ and $u$ determine the same subobject of $B$, and since $f x$ factors through $f$, that subobject lies below the image of $f$. Thus every morphism killed by $g$ factors through the image of $f$. Together with $g f = 0$, [L2] yields exactness at $B$. [L2, L3, L5, assume-hyp]

2.1 Pull back the epic $e:A \to I$ along $w$, obtaining $x:P \to A$ and an epic $\alpha:P \to W$ by [L4]. Then $f x = m e x = m w \alpha = y u \alpha$, so $f x \equiv y$. [L4, L5, step 1.1, construct, algebra]

3.1 Thus conditions 1 and 2 are equivalent. [step 2.1, step 1.2] ∎
