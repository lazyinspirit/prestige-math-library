---
id: def-spectral-multiplicity-function-in-the-separable-case
kind: definition
title: Spectral multiplicity function in the separable case
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem, lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces, def-cyclic-vector-and-cyclic-normal-operator, lem-scalar-and-complex-measures-from-a-pvm, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-integration-against-a-radon-nikodym-derivative, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, thm-riesz-fischer-completeness-of-l-p, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, def-separable-space, def-measurable-function-between-measurable-spaces, def-hilbert-space, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §10, printed pp.295–301"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Andreas Kriegl, Funktionalanalysis, §8.61 and §8.64, printed pp.196–199"
      url: "https://www.mat.univie.ac.at/~kriegl/Skripten/2019SSe.pdf"
---

## Definition

Assume AC. Let $T$ be a bounded normal operator on a **nonzero separable**
complex Hilbert space $H$ ([[def-separable-space]]) with spectral projection
valued measure $E$ on $\sigma(T)$ and spectral measure class to be described
below.

**Step 1: a countable cyclic decomposition.** By the multiplication-operator
form of the spectral theorem applied to a dense sequence, fix once and for all
a finite or countable family $(x_j)_{j\in J}$ of nonzero vectors with
$$H=\bigoplus_{j\in J}H_{x_j},\qquad \mu_j:=E_{x_j}=\langle E(\cdot)x_j,x_j\rangle,$$
where $H_{x_j}$ is the cyclic subspace of $x_j$ and each $\mu_j$ is a nonzero
finite positive regular Borel measure on $\sigma(T)$
([[thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem]],
[[def-cyclic-vector-and-cyclic-normal-operator]],
[[lem-scalar-and-complex-measures-from-a-pvm]]). The index set $J$ is a finite
or countable subset of $\mathbb N$, listed in increasing order, and summands
with $x_j=0$ are omitted.

**Step 2: a common dominating measure.** Put
$$\mu:=\sum_{j\in J}\frac{2^{-j}}{1+\mu_j(\sigma(T))}\,\mu_j .$$
Then $\mu$ is a finite positive measure with $\mu_j\ll\mu$ for every $j$; let
$$h_j:=\frac{d\mu_j}{d\mu},\qquad F_j:=\{z\in\sigma(T):h_j(z)>0\}$$
be the Radon–Nikodym derivative and its positivity set
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

**Step 3: the multiplicity function.** Define the **multiplicity function** of
the decomposition by
$$m(z):=\sum_{j\in J}\mathbf 1_{F_j}(z)\in\{0,1,2,\dots\}\cup\{\infty\}\qquad(z\in\sigma(T)).$$
It is a Borel function, and $z\mapsto m(z)$ is the *fiber dimension* function of
the model below. The set $S(z):=\{j\in J:z\in F_j\}$ of **active coordinates**
has cardinality $m(z)$, and for $r\ge1$ the $r$-th active coordinate is
$$k_r(z):=\min\{k\in J:\ \#(S(z)\cap\{j\in J:j\le k\})=r\},\qquad z\in A_r:=\{z:m(z)\ge r\},$$
a Borel function on the Borel set $A_r$; the sets $A_1\supseteq A_2\supseteq
\cdots$ are decreasing and $\bigcup_{r}A_r$ is $\mu$-conull.

**Step 4: the standard measurable-field model.** The **standard model** of the
decomposition is the space
$$L^2(\sigma(T),\mu,m):=\Bigl\{f=(f_r)_{r\ge1}:\ f_r \text{ Borel},\ f_r=0\ \mu\text{-a.e. on }\{m<r\},\ \sum_{r\ge1}\int|f_r|^2\,d\mu<\infty\Bigr\}$$
of measurable fields with componentwise operations and inner product
$\langle f,g\rangle=\sum_r\int f_r\overline{g_r}\,d\mu$
([[def-measurable-function-between-measurable-spaces]],
[[def-l-p-space-as-a-quotient-by-null-functions]]), where fields are identified
when they agree $\mu$-almost everywhere in every component. Its **fiber** at $z$ is
$\operatorname{span}\{e_1,\dots,e_{m(z)}\}\subseteq\ell^2(\mathbb N)$, so the
fiber dimension is exactly $m(z)$, and the model is the direct sum
$\bigoplus_{r\ge1}L^2(\mu|_{A_r})$ of the ordinary $L^2$-spaces of the
restrictions of $\mu$ to the decreasing sets $A_r$ ([[def-hilbert-space]]).

**Claim of the definition (identification with the operator model).** The
rank enumeration of active coordinates together with the Radon–Nikodym
derivatives identifies the standard model unitarily with the orthogonal sum of
the cyclic $L^2$-summands: the map
$$W:L^2(\sigma(T),\mu,m)\longrightarrow\bigoplus_{j\in J}L^2(\sigma(T),\mu_j), \qquad (Wf)_j(z):=\frac{f_{r(z,j)}(z)}{\sqrt{h_j(z)}} \ \text{ for }z\in F_j,\quad (Wf)_j:=0\ \text{ off }F_j,$$
where $r(z,j)$ is the rank of $j$ in $S(z)$, is a well-defined unitary operator
intertwining the multiplications by every bounded Borel function and, in
particular, intertwining $M_z$ with $M_z$.

**Well-definedness.** (1) $\mu$ is finite and nonzero and $\mu_j\ll\mu$ for
each $j$, since the $j$-th summand of the sum dominates
$\frac{2^{-j}}{1+\mu_j(\sigma(T))}\mu_j$. (2) $h_j$ exists, is nonnegative
$\mu$-almost everywhere and is unique up to $\mu$-null sets (Radon–Nikodym);
$F_j=\{h_j>0\}$ is Borel and $\mu_j(\sigma(T)\setminus F_j)=\int_{\{h_j=0\}}h_j\,d\mu=0$.
(3) $\bigcup_jF_j$ is $\mu$-conull: since $h_j=0$ off $F_j$ one has
$\mu_j(\sigma(T)\setminus\bigcup_jF_j)=\int_{\sigma(T)\setminus\bigcup_jF_j}h_j\,d\mu=0$
for every $j$, so the dominating sum vanishes there, and therefore $m\ge1$
$\mu$-almost everywhere. (4) $m$ is Borel as a countable sum of indicators, and
$k_r$ is Borel on $A_r$ because
$\{k_r=k\}=F_k\cap\{\sum_{\ell<k,\ell\in J}\mathbf 1_{F_\ell}=r-1\}$ is a Borel
set. (5) $L^2(\sigma(T),\mu,m)$ is a Hilbert space: it is the orthogonal direct
sum $\bigoplus_rL^2(\mu|_{A_r})$, whose components are complete by Riesz–
Fischer and whose direct sum is complete because a Cauchy sequence in the sum
has summable component norms, its components converge in the complete spaces
$L^2(\mu|_{A_r})$, and the componentwise limit has finite norm and is the norm
limit (dominated convergence for the counting measure)
([[thm-riesz-fischer-completeness-of-l-p]], [[thm-dominated-convergence]]).
(6) $W$ is well defined: $(Wf)_j$ is Borel because on each Borel set
$\{r(z,j)=r\}$ it equals $f_r/\sqrt{h_j}$ with $h_j>0$ there, it vanishes off
$F_j$, and it is $\mu_j$-square-integrable because
$$\sum_{j\in J}\int|(Wf)_j|^2d\mu_j =\sum_{j\in J}\int_{F_j}|f_{r(z,j)}|^2\,d\mu =\sum_{r\ge1}\int_{A_r}|f_r|^2\,d\mu=\|f\|^2<+\infty,$$
using $d\mu_j=h_j\,d\mu$ on $F_j$
([[thm-integration-against-a-radon-nikodym-derivative]],
[[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]]);
the same display shows $W$ is isometric, and $W$ is onto with inverse
$(g_j)_j\mapsto f$, $f_r(z):=g_{k_r(z)}(z)\sqrt{h_{k_r(z)}(z)}$ on $A_r$ and
$f_r:=0$ otherwise, which is Borel by the same rank-measurability and is
square-integrable by the same computation; multiplicativity is componentwise
and gives $W M_\varphi=M_\varphi W$ for every bounded Borel $\varphi$, hence
$WM_z=M_zW$. (7) The data $(\mu,h_j,F_j,m)$ depend on the chosen
decomposition; the measure class of $\mu$ and the almost-everywhere class of
$m$ are independent of the choice by the intertwiner lemma and the
classification theorem proved immediately below on this page. The multiplicity
function is the **fiber dimension**
$z\mapsto\dim H_z$ of the model, equal to $m(z)$; at a non-atomic point of
$\sigma(T)$ with respect to $E$ it is *not* the dimension of the eigenspace
$\ker(T-zI)$, which is the fiber of the atoms carried by $E(\{z\})$.
