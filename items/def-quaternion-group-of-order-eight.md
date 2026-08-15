---
id: def-quaternion-group-of-order-eight
kind: definition
title: 'The quaternion group $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ inside the nonzero quaternions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quaternions, thm-quaternions-form-a-division-ring, def-group, def-subgroup]
justified_by: []
aliases: [def-quaternion-group]
landmark: false
short: "$Q_8$"
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Group Theory, Example 3.9(c)'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Definition

Let $\mathbb{H}$ be the quaternions, with the basis quaternions
$1=(1,0,0,0)$, $i=(0,1,0,0)$, $j=(0,0,1,0)$, $k=(0,0,0,1)$ and the real
embedding $\lambda\mapsto\hat\lambda$ of [[def-quaternions]]. Write

$$n:=\widehat{-1}=(-1,0,0,0),\qquad -x:=nx\ \ (x\in\mathbb{H}),$$

so that $-x=(-x_0,-x_1,-x_2,-x_3)$ by the formula
$\hat\lambda x=x\hat\lambda=(\lambda x_0,\lambda x_1,\lambda x_2,\lambda x_3)$
recorded in [[def-quaternions]].

By [[thm-quaternions-form-a-division-ring]] the set
$\mathbb{H}\setminus\{0_{\mathbb{H}}\}$ is a group under quaternion
multiplication ([[def-group]]); write it $\mathbb{H}^{\times}$. The
**quaternion group** is the subset

$$Q_8\;:=\;\{\,1,\,-1,\,i,\,-i,\,j,\,-j,\,k,\,-k\,\}\;\subseteq\;\mathbb{H}^{\times}.$$

That $Q_8$ is a subgroup of $\mathbb{H}^{\times}$ ([[def-subgroup]]), that it has
exactly eight elements, and that $-1$ is its only element of order $2$ are proved
in [[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]
and are not assumed here.

## Remarks

- **Nothing is adjoined to $\mathbb{H}$.** The eight listed quaternions are
  particular quadruples of real numbers and the operation is the multiplication
  already defined on $\mathbb{H}$; no new multiplication table is postulated, and
  every product below is read off the table
  $i^{2}=j^{2}=k^{2}=-1$, $ij=k$, $jk=i$, $ki=j$, $ji=-k$, $kj=-i$, $ik=-j$
  that [[def-quaternions]] derives from its product formula.

- **$-1$ is not the additive inverse taken on trust.** The abbreviation $-x$ is
  defined here as the product $nx$ with the specific quaternion
  $n=(-1,0,0,0)$; that this coincides with componentwise negation is the
  displayed consequence of the product formula, not a separate convention.
