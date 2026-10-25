---
id: ex-hochschild-bicomplex-total-and-separate-degrees
kind: example
title: "Total and separate Hochschild degrees for a two-term complex"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - def-termwise-hochschild-homology-complex-and-iterated-homology
  - thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex
  - cor-polynomial-diagonal-bimodule-hochschild-homology
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-hochschild-chain-complex-of-a-bimodule
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "Exercises 9.1.1–9.1.3, printed pp.301–304: the commutative-algebra action on Hochschild groups and the one-variable polynomial diagonal Koszul computation this example specializes."
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, printed pp.5–7"
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "pp.6–7: the termwise Hochschild complex of a complex of graded bimodules and its three separate homological and internal gradings."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice (AC). Let $k$ be a field, let $R=k[x]$ be graded by
$\deg_{\mathrm{int}}x=2$, and let $F$ be the bounded cochain complex of
$k$-central $R$-bimodules with
$$F^0=R,\qquad F^1=R\{4\},\qquad F^i=0\ (i\neq0,1),\qquad d_F=0 .$$
Then the four nonzero termwise Hochschild groups are
$$HH_0(R,F^0)\cong R,\qquad HH_1(R,F^0)\cong R\{2\},\qquad HH_0(R,F^1)\cong R\{4\},\qquad HH_1(R,F^1)\cong R\{6\},$$
as graded $R$-modules, with $(i,j,\text{degree of a free }R\text{-generator})$
equal to $(0,0,0),(0,1,2),(1,0,4),(1,1,6)$, projecting to total cochain
degrees $0,-1,1,0$ respectively. The resulting total hyperhomology is
$$HH^{\mathrm{hyper},0}(R,F)\cong R\oplus R\{6\},\qquad HH^{\mathrm{hyper},-1}(R,F)\cong R\{2\},\qquad HH^{\mathrm{hyper},1}(R,F)\cong R\{4\},$$
with all other total degrees zero. In this zero-differential example the $E_2$
page already gives the total hyperhomology, because the total complex is a
direct sum of the two individual Hochschild complexes; in general the separate
$(i,j)$ decomposition of the hyperhomology is only a filtration, whose
associated graded object is the $E_\infty$ page.

## Facts & Assumptions

**Given:** AC, a field $k$, the algebra $R=k[x]$ graded by $\deg_{\mathrm{int}}x=2$, and the complex $F$ of $k$-central $R$-bimodules with $F^0=R$, $F^1=R\{4\}$, all other terms zero, and zero differential.

[F1] Assume AC. For $R=k[x_1,\ldots,x_n]$ graded by $\deg_{\mathrm{int}}x_i=2$ and regarded as its regular bimodule there are isomorphisms of graded $R$-modules $HH_j(R,R)\cong R^{\binom nj}\{2j\}$ for $0\leq j\leq n$, and $HH_j(R,R)=0$ for $j>n$; for $n=0$ this gives $HH_0(k,k)=k$ and $HH_j(k,k)=0$ for $j>0$ ([[cor-polynomial-diagonal-bimodule-hochschild-homology]]).

[F2] For every integer $r$ and graded module $M$ the internal shift has $(M\{r\})_d=M_{d-r}$ and the same scalar action; when $M$ is a graded bimodule both actions are unchanged, remain homogeneous and commute, so $M\{r\}$ is again a graded bimodule, and $(M\{r\})\{-r\}=M$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F3] The Hochschild chains are $C_j(A,M)=M\otimes_kA^{\otimes_kj}$ with $C_0(A,M)=M$ and boundary the alternating sum of the faces, the faces being built from the two module actions and the multiplication of $A$, and $HH_j(A,M)=H_j(C_\bullet(A,M))$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F4] For a bounded complex $F$ of $k$-central $A$-bimodules each differential $d_F^i$ commutes with the Hochschild faces and induces a map $HH_j(A,d_F^i):HH_j(A,F^i)\to HH_j(A,F^{i+1})$, and these maps make $(HH_j(A,F^\bullet),HH_j(A,d_F^\bullet))$ a cochain complex with cohomology $H^i$ ([[def-termwise-hochschild-homology-complex-and-iterated-homology]]).

[F5] The Hochschild hyperhomology total complex has $T^n(A,F)=\bigoplus_{i-j=n,\,j\geq0}C_j(A,F^i)$ with differential $D=d_F+(-1)^ib$ acting on the $(i,j)$ summand, and $HH^{\mathrm{hyper},n}(A,F)$ is the cohomology of $T^\bullet(A,F)$ in total degree $n$ ([[def-hochschild-hyperhomology-of-a-bimodule-complex]]).

[F6] Under the bounded-complex hypotheses, the filtration by the cochain index $i$ yields a cohomological spectral sequence with $E_1^{i,-j}=HH_j(A,F^i)$ and $E_2^{i,-j}=H^i(HH_j(A,F^\bullet))$, abutting to the finite image filtration by $E_\infty^{i,-j}\cong\operatorname{gr}^iHH^{\mathrm{hyper},i-j}(A,F)$; the result asserts nothing about the vanishing of higher differentials ([[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]]).

[F7] For graded modules $M,N$ over $k$ and integers $r,s$, the identity on elementary tensors induces a degree-zero isomorphism $M\{r\}\otimes_kN\{s\}\cong(M\otimes_kN)\{r+s\}$, natural in $M$ and $N$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[F8] AC is the choice-function principle: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it is assumed here only to license the AC-qualified computation [F1] at step 1.4.

## Verification

**Proof technique:** direct.

1.1 The grading puts $R_d=kx^{d/2}$ for even $d\geq0$ and $R_d=0$ for odd $d$, so $R$ is graded with $1_R$ of internal degree $0$; the regular bimodule is $k$-central, and by [F2] the shift $R\{4\}$ is again a graded $k$-central $R$-bimodule, with $(R\{4\})_d=R_{d-4}$ and $1$ of internal degree $4$. Hence $F$, with $F^0=R$ in cochain degree $0$, $F^1=R\{4\}$ in cochain degree $1$ and all other terms zero, is a bounded cochain complex of graded $k$-central $R$-bimodules whose differential $d_F=0$ is a degree-zero bimodule map. [F2, given, algebra]

1.2 By [F3] the termwise groups are $HH_j(R,F^i)=H_j(C_\bullet(R,F^i))$ with $C_j(R,F^i)=F^i\otimes_kR^{\otimes_kj}$, and the induced map $HH_j(R,d_F^0)$ is induced by the zero chain map, hence is zero; so by [F4] the termwise complex is the two-term complex $HH_j(R,F^0)\xrightarrow{\,0\,}HH_j(R,F^1)$ concentrated in cochain degrees $0$ and $1$, with $H^0=HH_j(R,F^0)$, $H^1=HH_j(R,F^1)$ and all other cohomology zero. [F3, F4, given, algebra]

1.3 By [F5] the total complex is $T^n(R,F)=\bigoplus_{i-j=n,\,j\geq0}C_j(R,F^i)$ with $D=d_F+(-1)^ib$; since $d_F=0$ the differential acts on $C_j(R,F^i)$ by $(-1)^ib$ alone, so $T^\bullet(R,F)$ is the direct sum of the two column complexes $(C_\bullet(R,F^0),b)$ and $(C_\bullet(R,F^1),-b)$, which have the same cycles and the same boundaries, and hence the same homology, as $(C_\bullet(R,F^0),b)$ and $(C_\bullet(R,F^1),b)$. Therefore $HH^{\mathrm{hyper},n}(R,F)\cong\bigoplus_{i-j=n,\,i\in\{0,1\},\,j\geq0}HH_j(R,F^i)$ as graded $k$-modules. [F3, F5, given, algebra]

1.4 Applying [F1] with $n=1$ gives $HH_0(R,R)\cong R^{\binom10}\{0\}=R$ and $HH_1(R,R)\cong R^{\binom11}\{2\}=R\{2\}$, while $HH_j(R,R)=0$ for $j>1$. [F1, F8, given, algebra]

1.5 By [F3] and [F7] the chain module $C_j(R,R\{4\})=(R\{4\})\otimes_kR^{\otimes_kj}$ is identified with $C_j(R,R)\{4\}=(R\otimes_kR^{\otimes_kj})\{4\}$ by the identity on elementary tensors, a degree-zero $k$-linear isomorphism; the faces of [F3] use only the left action, the right action and the multiplication of $R$, none of which the shift changes, so the identification intertwines the Hochschild boundaries and induces $HH_j(R,R\{4\})\cong HH_j(R,R)\{4\}$ for every $j$ as graded $k$-modules. [F2, F3, F7, given, algebra]

2.1 Combining steps 1.4 and 1.5 with $F^0=R$ and $F^1=R\{4\}$: $HH_0(R,F^0)\cong R$ and $HH_1(R,F^0)\cong R\{2\}$, while $HH_0(R,F^1)\cong HH_0(R,R)\{4\}\cong R\{4\}$ and $HH_1(R,F^1)\cong HH_1(R,R)\{4\}\cong R\{2\}\{4\}=R\{6\}$ by [F2]; moreover $HH_j(R,F^i)=0$ for $j>1$ and $i=0,1$, so these four groups are the only nonzero termwise groups. [F2, step 1.4, step 1.5, algebra]

3.1 The four nonzero termwise groups sit in bidegree $(i,j)$ with their free $R$-generators in internal degrees $0,2,4,6$: $(0,0)$ has $R$, $(0,1)$ has $R\{2\}$, $(1,0)$ has $R\{4\}$, and $(1,1)$ has $R\{6\}$. Since the total index of [F5] is $n=i-j$, they project to total cochain degrees $0$, $-1$, $1$ and $0$ respectively, placing $R$ and $R\{6\}$ in total degree $0$, $R\{2\}$ in total degree $-1$ and $R\{4\}$ in total degree $1$. [F5, step 1.2, step 2.1, given, algebra]

4.1 By step 1.3 the hyperhomology is the direct sum of the termwise groups computed in step 3.1, so $HH^{\mathrm{hyper},0}(R,F)\cong R\oplus R\{6\}$, $HH^{\mathrm{hyper},-1}(R,F)\cong R\{2\}$ and $HH^{\mathrm{hyper},1}(R,F)\cong R\{4\}$, with all other total degrees zero; the two free generators in total degree $0$ have internal degrees $0$ and $6$. [step 1.3, step 3.1, algebra]

5.1 By [F6] the filtration yields a spectral sequence with $E_1^{i,-j}=HH_j(R,F^i)$ and $E_2^{i,-j}=H^i(HH_j(R,F^\bullet))$, and step 1.2 identifies the second page as $E_2^{0,0}=R$, $E_2^{0,-1}=R\{2\}$, $E_2^{1,0}=R\{4\}$, $E_2^{1,-1}=R\{6\}$ and zero elsewhere; every differential $d_r$ with $r\geq2$ has empty target because $E_2$ is supported only in the columns $i=0,1$, so $E_2=E_\infty$. The abutment of [F6] then reads $\operatorname{gr}^0HH^{\mathrm{hyper},0}=R$, $\operatorname{gr}^1HH^{\mathrm{hyper},0}=R\{6\}$, $\operatorname{gr}^0HH^{\mathrm{hyper},-1}=R\{2\}$ and $\operatorname{gr}^1HH^{\mathrm{hyper},1}=R\{4\}$. The degree-zero extension is split because the zero differential makes the total complex the direct sum of the two Hochschild column complexes, as shown in 1.3; their free generators have internal degrees $0$ and $6$. [F6, step 1.2, step 3.1, step 4.1, given, algebra]

6.1 Collecting: the four nonzero termwise groups are $HH_0(R,F^0)\cong R$, $HH_1(R,F^0)\cong R\{2\}$, $HH_0(R,F^1)\cong R\{4\}$ and $HH_1(R,F^1)\cong R\{6\}$, with free-generator degrees $0,2,4,6$ at $(i,j)=(0,0),(0,1),(1,0),(1,1)$, projecting to total cochain degrees $0,-1,1,0$; the zero differential makes the total complex a direct sum of the two Hochschild complexes, giving $HH^{\mathrm{hyper},0}\cong R\oplus R\{6\}$, $HH^{\mathrm{hyper},-1}\cong R\{2\}$ and $HH^{\mathrm{hyper},1}\cong R\{4\}$ with all other total degrees zero, and the $E_2$ page equals the $E_\infty$ page. In contrast to this split situation, for a general bounded $F$ the cochain-index pieces only filter the hyperhomology, as in [F6], where neither degeneration of the spectral sequence nor a splitting of the $(i,j)$ pieces is asserted. [F6, step 4.1, step 5.1, given, algebra] ∎
