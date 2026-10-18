---
id: lem-octonion-conjugation-is-an-anti-involution
kind: lemma
title: Octonion conjugation is an anti-involution
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 1
deps: [def-octonion-algebra-by-cayley-dickson, lem-quaternion-conjugation-is-an-anti-involution, thm-quaternions-form-a-division-ring]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §§3.1–3.2"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
---

## Statement

For $\mathbb O$ of [[def-octonion-algebra-by-cayley-dickson]], octonion
conjugation satisfies $\overline{\bar x}=x$ and $\overline{xy}=\bar y\bar x$.
If $x=(a,b)$ with $a,b\in\mathbb H$, then

$$ x+\bar x=(\widehat{2a_0},0),\qquad x\bar x=\bar x x=(\widehat{N(a)+N(b)},0), $$

so its trace and norm are real scalars.

## Facts & Assumptions

**Given:** $x=(a,b)$ and $y=(c,d)$ in the pair model for $\mathbb O$.

[F1] $\mathbb O=\mathbb H\times\mathbb H$ has product
$(a,b)(c,d)=(ac-\bar d b,da+b\bar c)$ and conjugation
$(a,b)\mapsto(\bar a,-b)$ ([[def-octonion-algebra-by-cayley-dickson]]).

[F2] Quaternion conjugation is an involution, reverses products, and satisfies
$a+\bar a=\widehat{2a_0}$ ([[lem-quaternion-conjugation-is-an-anti-involution]]).

[F3] $a\bar a=\bar a a=\widehat{N(a)}$ for every quaternion $a$
([[thm-quaternions-form-a-division-ring]]).

## Proof
1.1 Applying quaternion conjugation twice gives $\overline{\overline{(a,b)}}=(\bar{\bar a},b)=(a,b)$. Also $(a,b)+\overline{(a,b)}=(a+\bar a,0)=(\widehat{2a_0},0)$ by [F2]. [given, F1, F2, algebra]

2.1 Using [F1] and reversing quaternion products by [F2], $\overline{(a,b)(c,d)}=(\overline{ac-\bar d b},-(da+b\bar c))=(\bar c\bar a-\bar b d,-da-b\bar c).$ The same pair-product formula gives $\overline{(c,d)}\,\overline{(a,b)}=(\bar c,-d)(\bar a,-b)=(\bar c\bar a-\bar b d,-b\bar c-da),$ which is equal because quaternion addition is commutative. Thus $\overline{xy}=\bar y\bar x$. [given, F1, F2, step 1.1, algebra]

3.1 Substitution in the pair formula [F1] and the quaternion norm identities [F3] gives $(a,b)(\bar a,-b)=(a\bar a+\bar b b,0)=(\widehat{N(a)+N(b)},0),\qquad (\bar a,-b)(a,b)=(\bar a a+\bar b b,0)=(\widehat{N(a)+N(b)},0).$ Hence $x\bar x=\bar x x=(\widehat{N(a)+N(b)},0)$, completing all claims. [given, F1, F3, step 1.1, algebra] ∎
