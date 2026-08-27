---
id: thm-residue-evaluation-principal-value-real-poles
kind: theorem
title: "Indented real-axis contours compute principal values with half-residue corrections"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cauchy-principal-value,
       rem-cauchy-principal-value-dictionary,
       def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       lem-large-semicircle-vanishing,
       lem-indented-arc-residue-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.5"
      url: "https://complexanalysis.org/web/ch_residue.html"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $R=p/q$, where $p,q\in\mathbb C[z]$ are nonzero, be a rational function with
$\deg q\ge\deg p+2$, and assume that its real poles
$a_1<\cdots<a_s$ are simple. For $T$ large enough to contain all these poles
and for pairwise disjoint symmetric deletion radii $\varepsilon_j>0$, put

$$I(T,\boldsymbol\varepsilon):=\int_{[-T,T]\setminus\bigcup_{j=1}^s(a_j-\varepsilon_j,a_j+\varepsilon_j)}R(x)\,dx,$$

where the integral is the sum over the remaining compact intervals. In this
statement,

$$\operatorname{PV}\!\int_{-\infty}^{\infty}R(x)\,dx:=\lim_{\substack{T\to\infty\\ \varepsilon_1,\ldots,\varepsilon_s\downarrow0}}I(T,\boldsymbol\varepsilon).$$

When $s=0$, the deleted union is empty and only $T\to\infty$ remains. Indent
every real pole above the real axis and close the contour in the upper
half-plane. Then this principal value exists and

$\operatorname{PV}\!\int_{-\infty}^{\infty}R(x)\,dx =2\pi i\sum_{\Im a>0}\operatorname{Res}(R,a) +i\pi\sum_j\operatorname{Res}(R,a_j).$

The correction term is the sum of the usual positive half-residues.

## Facts & Assumptions

**Given:** A rational function $R$ with a two-degree denominator gap and only simple real poles, all indented above the real axis.

[L1] At a finite singularity, a principal value uses equal left and right
deletions, while on the real line it uses the symmetric truncation $[-T,T]$;
neither assertion implies separate improper convergence
([[def-cauchy-principal-value]],
[[rem-cauchy-principal-value-dictionary]]).

[L2] For an admissible cycle, the residue theorem gives its contour integral as
$2\pi i$ times the index-weighted sum of the enclosed residues
([[thm-residue-theorem-null-homologous-cycle]]).

[L3] If the large upper semicircle meets no pole and
$\sup_{|z|=T,\,\Im z\ge0}|zR(z)|\to0$, then its integral tends to $0$
([[lem-large-semicircle-vanishing]]).

[L4] An upper indentation contributes $-i\pi\operatorname{Res}(R,a)$ in the limit ([[lem-indented-arc-residue-limit]]).

## Proof

**Proof technique:** direct.

1.1 For large $T$ and small pairwise disjoint indentation radii $\varepsilon_j$, form the contour specified in the statement. It is an admissible positively oriented cycle, avoids every real pole, and encloses precisely the nonreal poles in the upper half-plane, so [L2] applies. [given, L2]

2.1 The contour pieces have their asserted limits as $T\to\infty$ and every $\varepsilon_j\downarrow0$. [given, step 1.1, L1, L3, L4, algebra]

Indeed, the straight pieces sum to $I(T,\boldsymbol\varepsilon)$ from the
statement. The degree gap gives $R(z)=O(|z|^{-2})$, so the large semicircle
eventually meets no pole and satisfies the hypothesis of [L3]. Thus its
integral tends to $0$. Finally, [L4] makes the $j$th upper indentation tend to
$-i\pi\operatorname{Res}(R,a_j)$. [given, step 1.1, L1, L3, L4, algebra]

3.1 The residue theorem and step 2.1 give $\operatorname{PV}\!\int_{-\infty}^{\infty}R(x)\,dx-i\pi\sum_j\operatorname{Res}(R,a_j)=2\pi i\sum_{\Im a>0}\operatorname{Res}(R,a).$ Hence the joint limit exists, and moving the indentation term to the right proves the formula. [step 1.1, step 2.1, L2] ∎
