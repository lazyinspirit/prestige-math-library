---
id: ex-radical-and-nilradical-of-the-affine-lie-algebra
kind: example
title: Radical and nilradical of the affine Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra, def-nilradical-of-a-finite-dimensional-lie-algebra, ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, nilradical of a solvable algebra"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Proposition 1.40 and remark, printed p. 48"
---

## Example

Let $k$ have characteristic zero and let
$\mathfrak a=kx\oplus ky$ with $[x,y]=y$. Then

$$\operatorname{rad}(\mathfrak a)=\mathfrak a,\qquad \operatorname{nilrad}(\mathfrak a)=ky.$$

## Facts & Assumptions

**Given:** The displayed two-dimensional Lie algebra over a
characteristic-zero field.

[L1] The radical is the largest solvable ideal
([[def-radical-of-a-finite-dimensional-lie-algebra]]).

[L2] The nilradical is the largest nilpotent ideal in characteristic zero
([[def-nilradical-of-a-finite-dimensional-lie-algebra]]).

[L3] The affine algebra is solvable and not nilpotent
([[ex-the-two-dimensional-affine-lie-algebra-is-solvable-not-nilpotent]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], $\mathfrak a$ is solvable. It is an ideal of itself, so the universal property [L1] gives $\operatorname{rad}(\mathfrak a)=\mathfrak a$. [L1, L3]

1.2 The line $ky$ is an ideal because $[x,y]=y$ and $[y,y]=0$. It is abelian and therefore nilpotent, so [L2] gives $ky\subseteq\operatorname{nilrad}(\mathfrak a)$. [L2, given, algebra]

1.3 Let $I$ be an ideal not contained in $ky$. It contains a vector $v=ax+by$ with $a\neq0$. Since $I$ is an ideal, $[v,y]=ay$ lies in $I$, whence $y\in I$; then $x=a^{-1}(v-by)\in I$. Thus $I=\mathfrak a$, which is not nilpotent by [L3]. Consequently every nilpotent ideal is contained in $ky$. [L3, given, algebra]

2.1 Step 1.2 shows that $ky$ is a nilpotent ideal, and step 1.3 shows that it contains every nilpotent ideal. The universal property [L2] therefore gives $\operatorname{nilrad}(\mathfrak a)=ky$. Together with step 1.1 this proves both displayed identities. The only division is by the explicitly nonzero scalar $a$; no choice principle is used. [L2, step 1.1, step 1.2, step 1.3] ∎
