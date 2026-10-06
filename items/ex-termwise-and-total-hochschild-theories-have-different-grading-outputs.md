---
id: ex-termwise-and-total-hochschild-theories-have-different-grading-outputs
kind: example
title: "Termwise and total Hochschild theories have different grading outputs"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-termwise-hochschild-homology-complex-of-a-rouquier-complex, def-hochschild-hyperhomology-of-a-bimodule-complex, thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, def-hochschild-chain-complex-of-a-bimodule, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, def-axiom-of-choice, def-termwise-hochschild-homology-complex-and-iterated-homology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Anna Beliakova, Krzysztof K. Putyra and Stephan M. Wehrli, Quantum link homology via trace functor I, arXiv:1605.03523v2 (85 printed pages); section 3.8.6, equation (3.44), printed p. 39"
      url: "https://arxiv.org/pdf/1605.03523"
    - title: "Mikhail Khovanov, Triply graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; printed pp. 6-7"
      url: "https://arxiv.org/pdf/math/0510265"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice (used only in step 1.1, through the polynomial
diagonal Koszul theorem). Let $R=\mathbb Q[x]$ with $\deg x=2$ and let $F$ be
the two-term complex of $R$-bimodules with
$$F^0=F^1=R,\qquad d_F^0=0,$$
concentrated in cohomological degrees $0$ and $1$. Since $R$ is a polynomial
ring in one variable, its diagonal Koszul complex has
$$HH_0(R,R)=R,\qquad HH_1(R,R)=R\{2\},\qquad HH_h(R,R)=0\ (h\ge2),$$
where the generator of $HH_1$ is the Koszul symbol of internal degree $2$. The
termwise Hochschild complex of
[[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]] therefore
has $E_1^{c,-h}=HH_h(R,F^c)=HH_h(R,R)$ for $(c,h)\in\{0,1\}^2$ and zero
otherwise, all differentials $HH_h(R,d_F^c)$ vanish because $d_F=0$, and the
page $E_2=E_\infty$ carries four labeled free $R$-generators
$$(c,h,p)\in\{(0,0,0),\,(1,0,0),\,(0,1,2),\,(1,1,2)\},$$
each generating its displayed copy of $R$ or $R\{2\}$: the termwise theory retains the full $(c,h)$ bigrading
inside the trigrading, with generator degree $p=2h$ and further homogeneous classes in degrees
$p=2h+2d$, $d\ge0$, from multiplication by $x^d$. The total Hochschild hyperhomology of
[[def-hochschild-hyperhomology-of-a-bimodule-complex]] has total degree $n$
term $T^n=\bigoplus_{i-j=n}C_j(R,F^i)$; because $d_F=0$ the total complex is
the direct sum of the two shifted Hochschild complexes of the columns, and
$$HH^{\mathrm{hyper},n}\cong \begin{cases} R\{2\}, & n=-1,\\ R\oplus R\{2\}, & n=0,\\ R, & n=1,\\ 0, & \text{otherwise}. \end{cases}$$
The abutment retains only the total degree $n=c-h$ and the internal degree,
together with the induced filtration: the four termwise labels regroup as
$(c,h)=(0,0),(1,1)$ in total degree $0$, $(0,1)$ in degree $-1$ and $(1,0)$ in
degree $1$, In this zero-outer-differential example the column decomposition actually
gives a canonical splitting $R\oplus R\{2\}$ in degree $0$; the
filtration is therefore split here. The declared hyperhomology grading
records only $(n,p)$, although this particular model also retains the column
labels through its canonical direct sum. The spectral
sequence of
[[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]]
collapses at $E_1=E_2$ in this example, and no nonzero higher differential is
asserted.

## Facts & Assumptions

**Given:** the field $\mathbb Q$, the ring $R=\mathbb Q[x]$ with $\deg x=2$, the complex $F$ with $F^0=F^1=R$ and zero differential, and AC.

[L1] The one-variable diagonal Koszul bimodule complex for $R$ is $K(u;R^e)$ with $u=x^L-x^R$, degree-one term $R^e\{2\}$ and degree-zero term $R^e$; the symbol has internal degree $2$ and the differential preserves internal degree ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[L2] Under AC, $HH_h(R,M)\cong H_h$ of the diagonal Koszul complex of [[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]] tensored with $M$, naturally in the $k$-central $R$-bimodule $M$ and preserving internal degree ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[L3] $F$ is a bounded complex of $\mathbb Q$-central graded $R$-bimodules with differentials of internal degree zero; the maps induced on Hochschild homology by its (zero) differentials make $\bigl(HH_h(R,F^\bullet),HH_h(R,d_F^\bullet)\bigr)$ a cochain complex, whose cohomology is the iterated (termwise) Hochschild homology ([[def-termwise-hochschild-homology-complex-and-iterated-homology]], [[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]]).

[L4] The hyperhomology total complex has $T^n=\bigoplus_{i-j=n,\,j\ge0}C_j(R,F^i)$ with differential $D=d_F+(-1)^ib$ on the $(i,j)$ summand, and $HH^{\mathrm{hyper},n}=H^n(T^\bullet)$; the Hochschild complex $C_\bullet(R,M)=M\otimes_{\mathbb Q}R^{\otimes_{\mathbb Q}\bullet}$ has the alternating boundary $b$ ([[def-hochschild-hyperhomology-of-a-bimodule-complex]], [[def-hochschild-chain-complex-of-a-bimodule]]).

[L5] The spectral sequence of the filtration $F^pT^n=\bigoplus_{i\ge p,\,i-j=n}C_j(R,F^i)$ has $E_1^{i,-j}=HH_j(R,F^i)$, $E_2^{i,-j}=H^i(HH_j(R,F^\bullet))$, differentials $d_r\colon E_r^{i,-j}\to E_r^{i+r,-j-r+1}$, and abuts to the image filtration with $E_\infty^{i,-j}\cong\operatorname{gr}^iHH^{\mathrm{hyper},i-j}$ ([[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]]).

[L6] AC is the choice-function principle ([[def-axiom-of-choice]]), used only through [L2].



## Verification

**Proof technique:** direct.

1.1 Compute $HH_\bullet(R,R)$. By [L1] the diagonal Koszul complex of $R$ over $R$ has terms $R\{2\}$ in degree one and $R$ in degree zero, and the differential is multiplication by $u=x^L-x^R$, which acts on the regular bimodule $R$ as $xm-mx=0$. Hence the complex is $0\to R\{2\}\xrightarrow{0}R\to0$ and [L2] gives $HH_0(R,R)=R$ with generator in internal degree $0$, $HH_1(R,R)=R\{2\}$ with generator in internal degree $2$ (the Koszul symbol contributes the degree), and $HH_h(R,R)=0$ for $h\ge2$, since the complex has no terms above degree one. AC is used only here, in [L2]. [L1, L2, L6, given, algebra]

2.1 The termwise complex has four free $R$-generators. By [L3] the termwise complex in Hochschild degree $h$ has terms $HH_h(R,F^c)$ for $c=0,1$; by step 1.1 these are nonzero exactly for $h\in\{0,1\}$, where they are copies of $R\{2h\}$, with generator degree $2h$, and the induced differentials vanish because $d_F=0$. The page $E_1$ therefore has the four displayed free generators, and every higher differential $d_r\colon E_r^{c,-h}\to E_r^{c+r,-h-r+1}$ vanishes for bidegree reasons: for $r\ge2$ the target column $c+r\ge2$ is zero since $F$ is concentrated in degrees $0,1$. Hence $E_2=E_\infty=E_1$ and the termwise output is the trigraded object with the four labels $(c,h,p)$ displayed in the Example. [L3, step 1.1, algebra]

2.2 The total hyperhomology. By [L4] the total complex has $T^n=C_{-n}(R,F^0)\oplus C_{1-n}(R,F^1)$ for $n\le1$ and $T^n=0$ for $n\ge2$, with $D=+b$ on the $F^0$-summand and $D=-b$ on the $F^1$-summand because $d_F=0$; hence $T^\bullet$ is the direct sum of the two column complexes $C_\bullet(R,F^0)$ and $C_\bullet(R,F^1)[-1]$ in which the differential is $\pm b$ up to the index. Taking homology and using $HH_j(R,R)=0$ for $j\ge2$ from step 1.1 gives $H^{-1}=HH_1(R,F^0)=R\{2\}$, $H^0=HH_0(R,F^0)\oplus HH_1(R,F^1)=R\oplus R\{2\}$, $H^1=HH_0(R,F^1)=R$, and $H^n=HH_{-n}(R,F^0)\oplus HH_{1-n}(R,F^1)=0$ for $n\le-2$ and $n\ge2$; this is the displayed computation of the Example. [L3, L4, step 1.1, algebra]

3.1 Compare the two outputs and identify the filtration. By [L5] the page $E_\infty^{i,-j}$ contributes to $HH^{\mathrm{hyper},i-j}$ as $\operatorname{gr}^i$, so the four classes of step 2.1 regroup by the total degree $n=c-h$ as follows: $(c,h)=(0,1)$ gives $\operatorname{gr}^0$ of $HH^{\mathrm{hyper},-1}$, the pairs $(0,0)$ and $(1,1)$ give $\operatorname{gr}^0$ and $\operatorname{gr}^1$ of $HH^{\mathrm{hyper},0}$, and $(1,0)$ gives $\operatorname{gr}^1$ of $HH^{\mathrm{hyper},1}$. This matches step 2.2, where the two summands of $HH^{\mathrm{hyper},0}=R\oplus R\{2\}$ are exactly the two filtered pieces $HH_0(R,F^0)$ and $HH_1(R,F^1)$: the declared hyperhomology grading uses $(n,p)$, while in this particular example the vanishing outer differential supplies a canonical additional column decomposition. The termwise theory of step 2.1 keeps $c$ and $h$ separately inside the trigrading $(c,h,p)$, while the total theory of step 2.2 is declared graded by $n=c-h$ and $p$, with the indicated split filtration in this example; this is the asserted difference of grading outputs, and no nonzero higher differential occurs by step 2.1. [L5, step 2.1, step 2.2, algebra] ∎ 