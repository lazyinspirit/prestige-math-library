---
id: thm-riemann-roch-as-l-minus-index
kind: theorem
title: "Riemann-Roch as l minus i"
status: draft
origin: pipeline
deps:
  - def-invertible-sheaf-of-cartier-divisor
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-cartier-weil-divisors-curves-agree
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - thm-riemann-roch-euler-characteristic-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the Riemann-Roch, genus and
finiteness suppliers below. Let $k$ be a field, let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) with
genus $g=g(C)=h^1(C,\mathcal O_C)$
([[def-genus-euler-characteristic-curve]]), and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]). Then
$$l(D)-i(D)=h^0\bigl(C,\mathcal O_C(D)\bigr)-h^1\bigl(C,\mathcal O_C(D)\bigr)=\deg_k(D)+1-g,$$
where $l(D)=h^0(D)$ is the dimension of the Riemann-Roch space, $i(D)=h^1(D)$
the index of speciality ([[def-little-l-divisor]],
[[def-index-speciality-divisor]]). Moreover $i(D)\ge0$, so
$$l(D)\ge\deg_k(D)+1-g,$$
with equality if and only if $i(D)=0$; a divisor is called nonspecial exactly
when $i(D)=0$, a terminology fixed in `def-nonspecial-divisor`, which follows
on this page and consumes the present theorem. For the zero divisor the
identity reads $1-g=0+1-g$ with $i(0)=g$. The index of speciality remains an
unknown defect: no duality identifies it with the space of sections of a
complementary divisor, and no threshold statement about $2g-2$ is made.

The attachment of $\mathcal O_C(D)$ and the identification of $L(D)$ with
$H^0(C,\mathcal O_C(D))$ use the current interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]], inherited through
[[thm-riemann-roch-euler-characteristic-curve]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ with genus $g=g(C)=h^1(C,\mathcal O_C)$, and a divisor $D$ on $C$.

[F1] The curve $C$ is proper, of finite type and of chain dimension one over the field $k$, and a divisor on $C$ is a finite formal integral combination of closed points with $k$-degree $\deg_k(D)$ ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]]).

[F2] Notation: $l(D)=h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$ and $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ for every $i\ge0$; both are nonnegative integers, and for the zero divisor $l(0)=\dim_kH^0(C,\mathcal O_C)=1$ ([[def-little-l-divisor]]).

[F3] The index of speciality: $i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$ is a nonnegative integer, and $i(0)=h^1(C,\mathcal O_C)=g(C)$ is the genus; it depends only on the linear equivalence class of $D$ ([[def-index-speciality-divisor]], [[def-genus-euler-characteristic-curve]]).

[F4] Riemann-Roch in Euler-characteristic form: $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$; no Serre duality is used, and $h^1(D)$ is left as an unknown nonnegative integer ([[thm-riemann-roch-euler-characteristic-curve]]).

[F5] The current interfaces [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]] and [[thm-cartier-weil-divisors-curves-agree]] supply the attachment of $\mathcal O_C(D)$ and the identification of $L(D)$ with its global sections; this use is inherited from [F4].

[F6] The Axiom of Choice is used exactly through the Riemann-Roch supplier [F4], the genus definition [F3] and the finiteness supplier [F2]; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; substitute the definitions $l(D)=h^0(D)$ and $i(D)=h^1(D)$ into the Euler-characteristic Riemann-Roch identity, and read off the inequality and its equality case from $i(D)\ge0$.

1.1 Set-up. By [F1] the curve $C$ is proper over $k$ and $D$ is a divisor on $C$ with $k$-degree $\deg_k(D)$. By [F2] $l(D)=h^0(D)$ and by [F3] $i(D)=h^1(C,\mathcal O_C(D))$, a nonnegative integer; by [F4] applied to the divisor $D$ and the genus $g=g(C)$ of [F3], $h^0(D)-h^1(D)=\deg_k(D)+1-g$. [F1, F2, F3, F4]

2.1 The defect identity. Substituting the definitions of $l$ and $i$ from step 1.1 into the Riemann-Roch identity gives $l(D)-i(D)=h^0(D)-h^1(D)=\deg_k(D)+1-g$, the first displayed identity; all three expressions are integers, the left side because it is a difference of dimensions. [F2, F3, step 1.1]

3.1 The inequality and the equality case. Solving the identity of step 2.1 for $l(D)$ gives $l(D)=\deg_k(D)+1-g+i(D)$; since $i(D)\ge0$ by [F3], this gives $l(D)\ge\deg_k(D)+1-g$. If $l(D)=\deg_k(D)+1-g$, then subtracting gives $i(D)=0$; conversely if $i(D)=0$, the same identity gives $l(D)=\deg_k(D)+1-g$. Hence equality holds if and only if $i(D)=0$, and $i(D)\ge0$ is the nonnegativity of the dimension $h^1(D)$ of [F2]. [F2, F3, step 2.1]

3.2 The zero divisor. By [F2] $l(0)=1$, and by [F3] $i(0)=g(C)=g$; the identity of step 2.1 at $D=0$ therefore reads $1-g=0+1-g$, so the zero divisor is nonspecial exactly when $g=0$, and it is special with defect $g$ when $g>0$. [F2, F3, step 2.1]

4.1 Conclusion and choice accounting. Steps 2.1, 3.1 and 3.2 give the defect identity, the inequality with its equality case, and the zero-divisor reading, all for an arbitrary divisor $D$ on $C$; the index of speciality appears only as the dimension $i(D)$ of [F3], with no duality identification and no threshold statement. The Axiom of Choice is used only through the suppliers recorded in [F6], namely the Riemann-Roch theorem [F4], the genus definition [F3] and the finiteness supplier [F2]; the flagged dictionary [F5] records the inherited obligation on $\mathcal O_C(D)$. [F2, F3, F4, F5, F6, step 2.1, step 3.1, step 3.2] ∎
