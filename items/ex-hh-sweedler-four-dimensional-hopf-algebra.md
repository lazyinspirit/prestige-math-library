---
id: ex-hh-sweedler-four-dimensional-hopf-algebra
kind: example
title: "Sweedler's four-dimensional Hopf algebra"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - lem-hh-taft-algebra-pbw-and-hopf-structure
  - def-hh-scalar-and-tensor-conventions
  - thm-tensor-product-basis-from-bases
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §3.12"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---

## Example

Let $k$ be a field with $\operatorname{char}(k)\ne2$. Sweedler's algebra $H_4$ has basis $1,g,x,gx$, relations $g^2=1$, $x^2=0$, $gx=-xg$, and Hopf structure
$$
\Delta(g)=g\otimes g,\quad \Delta(x)=1\otimes x+x\otimes g,\quad \varepsilon(g)=1,\quad\varepsilon(x)=0,\quad S(g)=g,\quad S(x)=-xg=gx.
$$
It is neither commutative nor cocommutative.

## Verification

**Given:** A field $k$ of characteristic different from $2$.

[F1] [[lem-hh-taft-algebra-pbw-and-hopf-structure]]: for $N>1$ and a primitive $N$-th root $\zeta$, the basis $g^i x^j$ and the stated Hopf maps define the Taft algebra.

[F2] [[thm-tensor-product-basis-from-bases]]: if $(b_i)$ is a basis of $V$, the tensors $b_i\otimes b_j$ form a basis of $V\otimes V$.

1.1 Take $N=2$ and $\zeta=-1$. Since $\operatorname{char}(k)\ne2$, $-1$ has order $2$, so [F1] applies and gives basis $1,g,x,gx$, relations $g^2=1$, $x^2=0$, $gx=-xg$, and the displayed maps. The relation gives $-xg=gx$, so the stated value of $S(x)$ has both forms. [given, F1, algebra]

2.1 The algebra is not commutative: $gx$ is a nonzero basis element by [F1], and $gx=-xg$; equality $gx=xg$ would imply $2gx=0$, impossible because $2\ne0$ and $gx\ne0$. [step 1.1, F1, algebra]

3.1 The coproduct is not cocommutative: $\Delta(x)=1\otimes x+x\otimes g$, while its flip is $x\otimes1+g\otimes x$. In the tensor-product basis from [F2], the coefficient of $1\otimes x$ is $1$ in $\Delta(x)$ and $0$ in its flip, so these tensors differ. [step 1.1, F2, algebra] ∎
