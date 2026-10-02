---
id: def-hochschild-hyperhomology-of-a-bimodule-complex
kind: definition
title: "Hochschild hyperhomology of a bounded bimodule complex"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-chain-complex-of-a-bimodule
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-cohomology-object-of-a-cochain-complex
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §§3.8.4–3.8.6, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "§3.8.6, printed p.38: $\\mathrm{CH}_\\bullet(A,C_\\bullet):=\\mathrm{coInv}(C_\\bullet\\otimes_A R_\\bullet(A))$ for a complex of bimodules, and equation (3.44)."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1–9.1.5: Hochschild chains $C_n(A,M)=M\\otimes A^{\\otimes n}$ and the alternating boundary."
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, printed pp.5–7"
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "pp.6–7: the termwise Hochschild homology of a complex of graded bimodules and its three independent gradings."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $k$ be a field, let $A$ be a unital associative $k$-algebra, and let
$F=(F^i,d_F^i)_{i\in\mathbb Z}$ be a bounded cochain complex of $k$-central
$A$-bimodules with differentials of internal degree zero
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]):
$F^i=0$ outside a finite interval of integers, each $d_F^i:F^i\to F^{i+1}$ is a
map of $A$-bimodules, $d_F^{i+1}d_F^i=0$, and each $d_F^i$ preserves the
internal degree when the bimodules carry one
([[def-graded-ring-module-bimodule-and-internal-shift]]).

For $j\geq0$ let $C_j(A,F^i)$ denote the Hochschild chains of the coefficient
bimodule $F^i$, that is $C_j(A,F^i)=F^i\otimes_kA^{\otimes_kj}$ with
$C_0(A,F^i)=F^i$,
with the Hochschild boundary
$b_j:C_j(A,F^i)\to C_{j-1}(A,F^i)$ given by the alternating sum of the faces
([[def-hochschild-chain-complex-of-a-bimodule]]); recall
$C_{-1}(A,F^i)=0$ and $b_0=0$. The **Hochschild hyperhomology total complex**
has cochain degree $n$ term
$$T^n(A,F):=\bigoplus_{\substack{i-j=n\\ j\geq0}}C_j(A,F^i),$$
with differential $D:T^n(A,F)\to T^{n+1}(A,F)$ acting on the $(i,j)$ summand as
$$D:=d_F+(-1)^ib,\qquad x\longmapsto d_F(x)+(-1)^ib(x)\in C_j(A,F^{i+1})\oplus C_{j-1}(A,F^i).$$

Each total degree is a finite direct sum: if $F$ is supported in the interval
$[a,b]$, then for fixed $n$ the pair $(i,j)$ satisfies $i-j=n$ and $j\geq0$,
hence $i=n+j$ with $a\leq i\leq b$ and only the finitely many indices
$i\in[a,b]\cap[n,\infty)$ contribute, each by the single summand
$C_{i-n}(A,F^i)$. The differential is well defined and
$D^2=0$: a bimodule map commutes with every Hochschild face and therefore with
the boundary $b$, so $d_Fb=bd_F$, while $d_F^2=0$ and $b^2=0$; on the $(i,j)$
summand the coefficient of $b$ in $D$ is $(-1)^i$ and the coefficient of $b$ in
$D$ on the $(i+1,j)$ summand is $(-1)^{i+1}$, so the two mixed composites
$(-1)^{i+1}bd_F$ and $(-1)^id_Fb$ cancel. Thus $(T^\bullet(A,F),D)$ is a
cochain complex of $k$-modules and its cohomology is defined
([[def-cohomology-object-of-a-cochain-complex]]):
$$\mathrm{HH}^{\mathrm{hyper},n}(A,F):=H^n\bigl(T^\bullet(A,F)\bigr)=\frac{\ker\bigl(D:T^n(A,F)\to T^{n+1}(A,F)\bigr)}{\operatorname{im}\bigl(D:T^{n-1}(A,F)\to T^n(A,F)\bigr)}.$$

Both structure maps preserve internal degree, so the internal grading descends
to $T^\bullet(A,F)$ and to $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$. When $A$
and $F$ are internally graded, the ordinary tensor grading on
$C_j(A,F^i)=F^i\otimes_kA^{\otimes_kj}$ is the sum grading: for homogeneous
$f\in F^i$ and $a_1,\ldots,a_j\in A$, the tensor
$f\otimes a_1\otimes\cdots\otimes a_j$ has internal degree
$\deg_{\mathrm{int}}(f)+\sum_{t=1}^j\deg_{\mathrm{int}}(a_t)$. If $A$ is
concentrated in internal degree zero, this reduces to $\deg_{\mathrm{int}}(f)$.
The maps $d_F$ and $b$ are homogeneous of internal degree zero. When $A$ is
graded, the Hochschild boundary used here is the ordinary boundary of [[def-hochschild-chain-complex-of-a-bimodule]]: no Koszul
sign is inserted into a face merely because the entries have nonzero internal
degree.

For each integer $p$ the subspaces
$$F^pT^n(A,F):=\bigoplus_{\substack{i\geq p\\ i-j=n\\ j\geq0}}C_j(A,F^i)$$
form a decreasing filtration of $T^n(A,F)$ by subcomplexes
(each summand of $F^pT^\bullet$ has its $D$-image again in $F^pT^{\bullet+1}$,
because $d_F$ raises $i$ and $b$ fixes $i$). This filtration is finite at each
total degree, exhaustive and separated, since $F$ is bounded. The separate
indices $i$ and $j$ therefore enter only through this filtration: the
decomposition of $T^n(A,F)$ into its $(i,j)$ summands is not a direct sum
decomposition compatible with $D$, and one may not read
$\mathrm{HH}^{\mathrm{hyper},n}(A,F)$ off as a direct sum of the homologies of
the individual summands $C_j(A,F^i)$. What descends automatically is the
internal grading and the total cohomological degree $n$; the pair $(i,j)$
becomes a filtered piece, exactly as used by the termwise spectral sequence of
[[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]].

Three specializations record the conventions used throughout this page. If
$F$ is concentrated in cochain degree $0$, then $T^{-j}(A,F)=C_j(A,F)$ for
$j\geq0$, with differential $b$ raising the total cochain degree by one; thus
$\mathrm{HH}^{\mathrm{hyper},-j}(A,F)=HH_j(A,F)$, and the hyperhomology
vanishes in positive total degrees. If $F=0$, then $T^\bullet(A,F)=0$ and all hyperhomology
groups vanish. If the differential of $F$ vanishes, then $D$ is, on each
fixed-$i$ column, the boundary $b$ up to the sign $(-1)^i$. The total complex
is the direct sum of these reindexed Hochschild complexes, so
$$\mathrm{HH}^{\mathrm{hyper},n}(A,F)\cong\bigoplus_{i-j=n}HH_j(A,F^i).$$
This special decomposition does not extend to a general nonzero $d_F$; in that
case the $(i,j)$ pieces give the filtration, and the termwise groups
$H^i(HH_j(A,F))$ occur on the second page of
[[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]].

This definition is the complex-level Hochschild construction of the source: for
a complex of bimodules the Hochschild complex is formed degreewise and then
totalized, and the hyperhomology is the homology of that total complex
(BPW §3.8.6, printed p.38; Khovanov, printed pp.6–7). No projective resolution
is fixed here; the identification of $T^\bullet(A,F)$ with the total complex of
the reindexed two-sided bar resolution tensored over $A^e$ with $F$, and the
consequent resolution independence of $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$, is
the content of [[thm-hochschild-hyperhomology-is-resolution-independent]].
