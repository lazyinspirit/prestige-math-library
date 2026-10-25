---
id: ex-comparing-the-two-quantitative-density-scales
kind: example
title: "Comparing the two quantitative density scales"
status: published
origin: pipeline
deps: [cor-fox-sudakov-quantitative-induced-density-bound, thm-loglog-quantitative-induced-density-bound, thm-logarithm-change-of-base, thm-natural-logarithm-laws]
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "1.7–1.8, numerical comparison"
generation:
  role: example
proof_strategy: direct
---

## Example

Fix $C_1,C_2>0$. For $0<x<1/2$ put $L=\log_2(1/x)$, $D_1=2^{-C_1L^2}$ and $D_2=2^{-C_2L^2/\log_2 L}$. The ratio of logarithmic losses is
$$\frac{\log_2(1/D_2)}{\log_2(1/D_1)}=\frac{C_2}{C_1\log_2 L},$$
and tends to zero as $x$ decreases to zero. Consequently $D_2>D_1$ for all sufficiently small $x$. With $C_1=C_2=C$ and $x=1/16$, the fractions are $D_1=2^{-16C}$ and $D_2=2^{-8C}$.

## Facts & Assumptions

**Given:** $C_1,C_2>0$, $0<x<1/2$, and $L,D_1,D_2$ as defined in the example.

[F1] From [[cor-fox-sudakov-quantitative-induced-density-bound]]: $\delta=2^{-C_H(\log_2(1/x))^2}$

[F2] From [[thm-loglog-quantitative-induced-density-bound]]: $\delta=2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}$.

[F3] $\log_bx=\frac{\log x}{\log b},\qquad b^{\log_bx}=x,\qquad \log_b(b^u)=u\quad(u\in\mathbb R)$. ([[thm-logarithm-change-of-base]]).

## Verification

1.1 The two fractions have the forms in [F1] and [F2], with their constants allowed to differ. Since $L>1$, both losses are positive. Applying [F3] to their reciprocals yields losses $C_1L^2$ and $C_2L^2/\log_2L$. Dividing and cancelling $L^2>0$ gives $C_2/(C_1\log_2L)$. [F1, F2, F3]

2.1 For any $r>0$, take $x_r=2^{-2^{C_2/(C_1r)+1}}\in(0,1/2)$. If $0<x<x_r$, then $L>2^{C_2/(C_1r)+1}$ and $\log_2L>C_2/(C_1r)+1$, so the ratio is less than $r$. This proves the stated zero limit. Taking $r=1$ makes the second loss smaller than the first; strict increase of base-two exponentiation gives $D_2>D_1$ after negating the losses. [step 1.1, algebra]

3.1 At $x=1/16$ one has $L=4$ and $\log_2L=2$. For equal constants $C>0$, the losses are $16C$ and $8C$, so $D_1=2^{-16C}<2^{-8C}=D_2$. The eventual comparison above does not assert dominance throughout the interval for unrelated constants. [step 1.1, step 2.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 1.7–1.8, numerical comparison.
