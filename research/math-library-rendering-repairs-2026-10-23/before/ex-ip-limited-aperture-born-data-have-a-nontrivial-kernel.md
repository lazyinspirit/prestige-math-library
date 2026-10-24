---
id: ex-ip-limited-aperture-born-data-have-a-nontrivial-kernel
kind: example
title: Finite limited-aperture Born samples miss a nonzero contrast
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - def-ip-fixed-frequency-far-field-data
  - alg-ip-regularized-born-reconstruction
  - lem-ip-born-linearization-of-the-scattering-map
  - lem-volume-integral-operator-well-defined-and-bounded
  - thm-dimension-of-a-linear-subspace
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-rank-nullity
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the box-measure, fixed-frequency volume, and Born suppliers. The finite-dimensional nullspace construction uses no choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 10–11: Fourier sampling in the first Born formula; §1.2.2, pp. 18–20: scope of the nonlinear far-field map"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: volume-scattering model and outgoing convention"
    - title: "Semyon Dyatlov, MIT 18.155 Lecture Notes: Distributions, Elliptic Regularity, and Applications to PDEs"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.1, Definition 11.1, printed p. 119: L1 Fourier-transform convention"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Example

Assume Countable Choice. Let $D=[0,1]^3$, $k>0$, and let $r,s\ge1$. Take nonempty finite lists $\theta_1,\ldots,\theta_r\in\Gamma_{\mathrm{obs}}$ and $d_1,\ldots,d_s\in\Gamma_{\mathrm{inc}}$, where $\Gamma_{\mathrm{obs}},\Gamma_{\mathrm{inc}}\subsetneq S^2$ are proper direction sets. Put $m:=rs$ and $N:=m+1$. Use the partition
$$E_n=[(n-1)/N,n/N)\times[0,1]^2\quad(1\le n<N),\qquad E_N=[(N-1)/N,1]\times[0,1]^2$$
and give the regularized Born algorithm these direction lists and this partition. The finite linearized Born data map has a nonzero piecewise-constant contrast in its kernel. Consequently, for zero sampled Born data, any admissible filter, any discrepancy threshold $\delta\ge0$, and any positive budget $B\ge1$ make the one-pass reconstruction return the zero estimate with discrepancy status, even though a nonzero contrast gives the same finite Born samples. This is a statement about the finite linearized model only; it does not assert equality of exact nonlinear scattering data.
## Example references

[[def-ip-fixed-frequency-far-field-data|The Born sample at $(\theta,d)$ is the Fourier value at $k(\theta-d)/(2\pi)$ divided by $4\pi$.]]

[[alg-ip-regularized-born-reconstruction|The declared finite matrix maps piecewise-constant coefficients to sampled Born data and reports a residual status.]]

[[lem-ip-born-linearization-of-the-scattering-map|The sampled linear model is the Fréchet derivative at zero contrast.]]

[[thm-rank-nullity|The kernel of a linear map from $\mathbb C^{m+1}$ to $\mathbb C^m$ is nonzero.]]

[[thm-dimension-of-a-linear-subspace|The image of a map into $\mathbb C^m$ has dimension at most $m$.]]

## Facts & Assumptions

**Given:** Countable Choice; $D=[0,1]^3$; $k>0$; integers $r,s\ge1$; observation directions $\theta_b\in\Gamma_{\mathrm{obs}}$ for $1\le b\le r$; incident directions $d_a\in\Gamma_{\mathrm{inc}}$ for $1\le a\le s$; proper sets $\Gamma_{\mathrm{obs}},\Gamma_{\mathrm{inc}}\subsetneq S^2$; zero data $y=0$; an admissible filter; a threshold $\delta\ge0$; and a budget $B\ge1$. Write $m=rs$.

[F1] For each acquisition pair $(\theta_b,d_a)$, the Born sample is $\mathcal B_kh(\theta_b,d_a)=\frac1{4\pi}\widehat{h_0}(k(\theta_b-d_a)/(2\pi))$ ([[def-ip-fixed-frequency-far-field-data]], [[def-fourier-transform-on-l-one-of-rn]]).

[F2] With a partition $D=\bigsqcup_{n=1}^N E_n$, the discrete matrix entries are $F_{jn}=\frac1{4\pi}\int_{E_n}e^{-2\pi i x\cdot\xi_j}\,dx$ and coefficients $c$ reconstruct $\sum_n c_n1_{E_n}$ ([[alg-ip-regularized-born-reconstruction]]).

[F3] Every cell $E_n$ below has Lebesgue measure $1/(m+1)>0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] For a linear map $A:V\to W$ with $V$ finite-dimensional, $\dim V=\dim\ker A+\dim\operatorname{im}A$ ([[thm-rank-nullity]]).

[F5] The image of a linear map into the $m$-dimensional space $\mathbb C^m$ is a subspace of dimension at most $m$ ([[thm-dimension-of-a-linear-subspace]]).

[F6] The operator bound $\rho_k(q)\le C_D\|q\|_\infty$ implies $t h\in\mathcal U_{D,k}$ for every sufficiently small $t$ ([[lem-volume-integral-operator-well-defined-and-bounded]], [[def-ip-fixed-frequency-far-field-data]]).

[F7] For zero data, any declared linear spectral filter returns the zero coefficient vector; its residual is zero and the status is discrepancy when the threshold is nonnegative ([[alg-ip-regularized-born-reconstruction]]).

[A1] Countable Choice is inherited from the volume-model branch ([[def-countable-choice]]).

## Verification

**Given:** The data in the Statement.

1.1 Put $N=m+1$ and partition $D$ into the $N$ measurable slabs $E_n=[(n-1)/N,n/N)\times[0,1]^2\quad(1\le n<N),\qquad E_N=[(N-1)/N,1]\times[0,1]^2.$ They are pairwise disjoint, cover $D$, and have measure $1/N$ by [F3]. For each pair $(\theta_b,d_a)$ set $\xi_{ba}=k(\theta_b-d_a)/(2\pi)$ and define $F\in\mathbb C^{m\times N}$ by $F_{(b,a),n}=\frac1{4\pi}\int_{E_n}e^{-2\pi i x\cdot\xi_{ba}}\,dx$. [F1, F2, F3, given, construct]

1.2 Regard $F$ as the linear map $\mathbb C^{m+1}\to\mathbb C^m$. Its image is a subspace of dimension at most $m$ by [F5], so [F4] gives $\dim\ker F=(m+1)-\dim\operatorname{im}F\ge1$. Choose a nonzero $c=(c_n)_{n=1}^{m+1}\in\ker F$. [F4, F5, given, choose, algebra]

2.1 Define $h:=\sum_{n=1}^{m+1}c_n1_{E_n}$. Since at least one $c_n\ne0$ and each $E_n$ has positive measure, $h$ is a nonzero element of $L^\infty(D;\mathbb C)$. By [F1] and [F2], $\mathcal B_kh(\theta_b,d_a)=(Fc)_{(b,a)}=0$ for every $1\le b\le r$, $1\le a\le s$. Thus the finite Born sample map has a nontrivial kernel. [F1, F2, step 1.2, algebra]

3.1 For any scalar $t$, [F6] gives $\rho_k(th)\le C_D\|th\|_\infty=C_D|t|\|h\|_\infty$. The right-hand side tends to zero as $|t|\to0$, so choose $t\ne0$ small enough that $th\in\mathcal U_{D,k}$. Set $q:=th$. Linearity of $\mathcal B_k$ gives $\mathcal B_kq(\theta_b,d_a)=0$ for every acquisition pair while $q\ne0$. The vector $c$ is a nonzero coefficient representation of a contrast whose sampled first Born data are exactly those of zero. [A1, F1, F6, step 2.1, algebra]

4.1 For input $y=0$, any filter application in the algorithm gives $\widehat c=0$ by [F7]; the reconstruction is zero and $R=\|F(0)-0\|_2=0\le\delta$, so the status is discrepancy for every $\delta\ge0$ and positive budget. This status cannot distinguish the zero contrast from the nonzero contrast in step 3.1 within the finite Born model, and no statement about the exact nonlinear data was used. [F7, step 3.1, algebra] ∎
