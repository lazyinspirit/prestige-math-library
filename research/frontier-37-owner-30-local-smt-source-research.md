# Local punctured-disc SMT source research

Date: 2026-09-30  
Scope: source and proof-route research for the owner-held Step3a defect in
run frontier-37-owner-30, batch26 Nevanlinna. This file records evidence and
does not amend the plan, item inventory, engine state, gate, or certificate.

## Binding promise and conclusion

The complex-analysis plan expressly requires
**thm-local-second-main-theorem-on-a-punctured-disc** before the Great Picard
corollary, with the rescaling, characteristic, and exceptional-radius error
stated. It also says an entire-plane SMT does not prove that punctured-disc
claim (research/plan-complex-analysis-track.md, §D, lines 5446–49; §M.1,
lines 5734–36).

The best source-backed route found is to rescale the puncture to infinity,
derive the normalized exterior first main theorem directly from annular Jensen,
and reproduce the partial-fraction/ramification proof of the second main
theorem using the exterior logarithmic-derivative estimate of Lund–Ye,
Theorem A2. This yields the ordinary circular exterior characteristic and an
exceptional set of finite linear measure in the exterior radius. The route is
mathematically concrete, but the exterior truncated SMT itself is a local
derivation to write and audit: none of the inspected sources gives the exact
standard circular exterior theorem verbatim with all these conventions. The
items below identify the proof obligations; they should not be silently
replaced by a Tsuji or centered-annulus statement.

## Exterior rescaling and theorem template

Let $f$ be meromorphic on $0<|z-z_0|<R_0$, and fix finitely many distinct
values $a_1,\ldots,a_q\in\widehat{\mathbb C}$, $q\ge3$. Choose
$0<\rho<R_0$ so that the circle $|z-z_0|=\rho$ contains no pole of $f$
and no $a_j$-point for finite $a_j$. Set

$$
  F(w)=f(z_0+\rho/w),\qquad R=\rho/s.
$$

Then $F$ is meromorphic on a neighborhood of the fixed circle $|w|=1$
and on the exterior $|w|>1$; $s\downarrow0$ is exactly $R\to\infty$.
This is an exterior domain with a fixed positive inner boundary, not a
whole-plane application.

Use normalized circular means

$$
m_{\rm loc}(s,\infty)=\frac1{2\pi}\int_0^{2\pi}
  \log^+|f(z_0+se^{i\theta})|\,d\theta,
$$

and, for finite $a$,

$$
m_{\rm loc}(s,a)=\frac1{2\pi}\int_0^{2\pi}
  \log^+\frac1{|f(z_0+se^{i\theta})-a|}\,d\theta.
$$

Let $n_{\rm loc}(t,a)$ count zeros of $f-a$, with multiplicity, in
$t\le|z-z_0|<\rho$; for $a=\infty$, count poles. Define

$$
N_{\rm loc}(s,a)=\int_s^\rho n_{\rm loc}(t,a)\,\frac{dt}{t},
\qquad
\bar N_{\rm loc}(s,a)=\int_s^\rho \bar n_{\rm loc}(t,a)\,\frac{dt}{t},
$$

where $\bar n$ counts each point once. Endpoint choices at the fixed circle
change only fixed boundary terms. Set

$$
T_{\rm loc}(s,f)=m_{\rm loc}(s,\infty)+N_{\rm loc}(s,\infty).
$$

Under $w=\rho/(z-z_0)$, these are the ordinary normalized exterior
characteristics of $F$, based at $|w|=1$. A theorem suitable for the
binding promise has the form

$$
(q-2)T_{\rm loc}(s,f)\le
  \sum_{j=1}^q\bar N_{\rm loc}(s,a_j;f)
  +O_{f,\rho,\vec a}\!\left(\log^+T_{\rm loc}(s,f)+\log\frac{\rho}{s}+1\right)
$$

as $s\downarrow0$, outside $E_s=\{\rho/R:R\in E_R\}$, where
$E_R\subset[1,\infty)$ has finite linear measure. The change of variables
is exact:

$$
\int_{E_s}\frac{ds}{s^2}=\frac{|E_R|}{\rho}<\infty.
$$

Thus the exceptional-radius statement is stronger and more informative than
merely saying “outside an exceptional set”; the error retains the inner-circle
term as $O(\log R)=O(\log(\rho/s))$.

## Primary source: exterior FMT and logarithmic derivative

**Mark Lund and Zhuan Ye**, “Nevanlinna theory of meromorphic functions on
annuli,” *Science China Mathematics* **53** (2010), 547–554, DOI
[10.1007/s11425-010-0037-3](https://doi.org/10.1007/s11425-010-0037-3).

The inspected full text gives the exact exterior setup and estimates:

- Printed p. 549, Definition A: for fixed $\rho_0>0$,
  $N_1(R,\omega)=\int_{\rho_0}^R n_1(t,\omega)\,dt/t$, where $n_1$
  counts zeros of $F-\omega$ with multiplicity in
  $\{\rho_0\le|w|\le t\}$ for finite $\omega$, and poles for
  $\omega=\infty$. Their printed proximity function is
  $m_1(R,\infty)=\int_0^{2\pi}\log^+|F(Re^{i\theta})|\,d\theta$, and
  $T_1=m_1(R,\infty)+N_1(R,\infty)$.
- Printed p. 551, Theorem A1: if nonconstant $F$ is meromorphic in a
  neighborhood of $\{w:0<\rho_0\le|w|<\infty\}$, then for finite
  $\omega$, $m_1(R,\omega)+N_1(R,\omega)=T_1(R)+O(\log R)$. The authors
  explicitly attribute the $O(\log R)$ difference from the plane FMT to the
  fixed positive inner radius.
- Printed p. 552, Theorem A2, under the same domain hypothesis:
  $$
  m\!\left(R,\frac{F'}F\right)=
  O\!\left(\max\{\log^+T_1(R,F),\log R\}\right)
  $$
  for $R\ge\rho_0$, as $R\to\infty$ outside $E_R$ of finite linear
  measure.

**Normalization caveat.** The printed p. 549 mean has no $1/(2\pi)$, while
the integrated count is also unscaled. Do not quote A1 as an exact normalized
FMT without reconciling that factor. The local route above defines normalized
means and obtains its FMT from annular Jensen; A1 independently confirms the
fixed-inner-boundary $O(\log R)$ scale. The A2 big-O remains valid under a
fixed mean normalization.

For each finite target $a$, the required Jensen identity on a regular fixed
circle $|w|=r_*$ is

$$
M_a(R)-M_a(r_*)=k_a(r_*)\log(R/r_*)+
  N_{\rm ext}(R,a)-N_{\rm ext}(R,\infty),
$$

where $M_a(r)=(2\pi)^{-1}\int\log|F(re^{i\theta})-a|d\theta$,
$N_{\rm ext}(R,a)=\int_{r_*}^R n(t,a)dt/t$, and
$k_a(r_*)=(2\pi i)^{-1}\int_{|w|=r_*}F'(w)/(F(w)-a)\,dw$ is the integer
winding number. This inner-circle term is the explicit source of the
logarithmic-radius error. The normalized exterior FMT then follows by combining
Jensen with $m(R,F-a)=m(R,F)+O_a(1)$.

## Proof obligations for the local SFT route

To turn the primary source into the promised truncated SMT, the repair should
write and audit these local steps:

1. Derive the normalized exterior FMT just described, including the fixed
   inner-circle winding number and boundary constant.
2. Establish the needed exterior characteristic comparison for the rational
   target changes used in the standard partial-fraction/ramification proof,
   with the inner-boundary contribution retained as $O(\log R)$. The plane
   comparison cannot simply be imported as an exterior identity.
3. Apply Lund–Ye A2 to the finitely many logarithmic derivatives arising from
   $F-a_j$ (and $F'/F$ for infinity). A finite union of their
   finite-linear-measure exceptional sets still has finite linear measure.
4. Repeat the standard partial-fraction/ramification argument to obtain the
   truncated inequality. The resulting error has the stated
   $O(\log^+T_{\rm ext}+\log R+1)$ scale.
5. For the Great Picard use, prove the growth bridge: if an exterior
   characteristic is $O(\log R)$ on the good radii, then only finitely many
   exterior poles occur and the function has at most polynomial growth, hence
   is meromorphic at infinity. One route is to use
   $N(R)\ge n(x)\log(R/x)$ for $R>x$, choose good $R$ comparable to
   $x^2$ to bound the number of poles up to $x$, remove those finitely many
   poles, and use the annular subharmonic/Poisson estimate on good
   $R\in[2r,3r]$ to get a polynomial maximum-modulus bound on $|w|=r$.
   Cauchy estimates then show the Laurent series has only finitely many
   positive powers. With three omitted values the SMT gives
   $T\le C(\log^+T+\log R+1)$ on good radii; absorb $\log^+T$ to get
   $T=O(\log R)$ there, contradicting an essential singularity at
   infinity. This bridge is part of the local proof, not a consequence of
   Tsuji growth alone.

The Goldberg–Ostrovskii plane proof is a model for step 4, not a direct
punctured-disc citation. The local rational-characteristic comparison and
growth bridge above must be supplied rather than silently assumed.

## Other inspected sources and scope limits

### Goldberg–Ostrovskii

**A. A. Goldberg and I. V. Ostrovskii**, *Value Distribution of Meromorphic
Functions* (full monograph text inspected; translation of the 1970 monograph).

- Ch. 3 §2, Theorem 2.1 and equation (2.10), printed pp. 96–99: plane second
  main theorem and its partial-fraction/ramification proof, with the standard
  logarithmic-derivative error.
- Ch. 1 §5, Theorem 5.3, printed p. 27: first main theorem for Tsuji
  characteristics in a half-plane.
- Ch. 3 §3, Theorem 3.3, printed p. 112: earlier second-main-theorem results
  also hold for angular and Tsuji characteristics with their corresponding
  errors.

These Tsuji results concern a half-plane/logarithmic-cover characteristic, not
the standard circular exterior characteristic above. No verified implication
from $T_{\rm Tsuji}(r)=O(\log r)$ to meromorphic extension at the puncture
was found. They are not a substitute for the local growth bridge.

### Annular SMT on centered symmetric annuli

**Si Duc Quang**, “Meromorphic Functions on Annuli Sharing Finite Sets with
Truncated Multiplicity,” arXiv:2202.09523v2,
<https://arxiv.org/abs/2202.09523> (full text also at
<https://arxiv.org/pdf/2202.09523>).

Theorem 2.2, printed pp. 4–5, states an annular SMT on
$A(R_0)=\{1/R_0<|z|<R_0\}$, centered at the unit circle; its counts include
both radial directions. For $R_0=\infty$ the domain is all of
$\mathbb C^*$, not just an exterior neighborhood of one puncture. For
finite $R_0$, the theorem concerns both finite annular edges. Its
exceptional-set definition on printed p. 4 is also tied to those annular
boundary variables: for $R_0=\infty$,
$S_f(r)=O(\log(rT_0(r,f)))$ outside $\Delta_R$ with
$\int_{\Delta_R}r^{\lambda-1}dr<\infty$; for finite $R_0$,
$S_f(r)=O(\log(T_0(r,f)/(R_0-r)))$ outside $\Delta'_R$ with
$\int_{\Delta'_R}dr/(R_0-r)^{\lambda+1}<\infty$. This does not furnish
the exterior circular theorem.

### Arbitrary-annulus FMT, but no SMT in this source

**A. A. Kondratyuk**, “Meromorphic functions with several essential
singularities,” arXiv:0807.1247v1,
<https://arxiv.org/abs/0807.1247> (full text:
<https://arxiv.org/pdf/0807.1247>).

Printed pp. 10–13, §§4–5, define a two-parameter characteristic on arbitrary
annuli, including punctured disks, and give first-main-theorem formulas
(equations (19)–(20)). This paper does not state an SMT. Its reference [1],
printed p. 13, is A. A. Kondratyuk and I. Laine, “Meromorphic functions in
multiply connected domains,” in *Fourier series methods in complex analysis*
(Mekrijärvi, 2005), University of Joensuu Department of Mathematics Report
Series 10 (2006), pp. 9–111. The 103-page report itself was not retrieved or
read, so no theorem or conclusion is attributed to it here. A UEF repository
API search for the title and authors returned no relevant full-text record.

### Other routes

- Whole-plane SMT statements do not cover the exterior domain after
  rescaling. The whole-disc SMT candidate does not cover a puncture that is
  essential from the interior side.
- The batch26 Schottky/exterior-extension proof is an independent Picard route;
  it does not prove or discharge the separately promised local SMT.

## Retrieved-file evidence

Hashes are SHA-256 of the files actually inspected. Text files are extracted
working copies, not independent publications.

| Source | Retrieved full text / locator | Bytes | SHA-256 |
|---|---|---:|---|
| Lund–Ye PDF | /tmp/lund-ye-annuli.pdf; DOI above. Eight-page full PDF; upstream fetch URL was not retained in the shared workspace. | 185,788 | 8648c790f814b66d454239c9c5456a3b782dcd655029399ec9a95d6fc6478667 |
| Lund–Ye extracted text | /tmp/lund-ye-annuli-inspect.txt | 25,894 | a18edae84b79533a342eab98da983d0453e303e7ba354d7af59d41e5294672f0 |
| Goldberg–Ostrovskii PDF | /tmp/nevanlinna-GO.pdf; complete monograph. Upstream fetch URL was not retained in the shared workspace. | 4,847,869 | 57977e671d5bf1b88715cc3ebb4ac51b798b1f648b0659af929a08169cffe433 |
| Goldberg–Ostrovskii extracted text | /tmp/nevanlinna-GO.txt | 1,084,455 | 41df192cf23d934dd5c6c91e3c6ad9b0d2517726c66b5bd0a5bb935e29b44ea8 |
| Kondratyuk arXiv PDF | /tmp/frontier-37-annular-nevanlinna.pdf; <https://arxiv.org/pdf/0807.1247> | 113,922 | ba78d47e1ddbeddccc3772fbb478df6ba34efe3e64b801edf07503b987d5c7d8 |
| Kondratyuk extracted text | /tmp/frontier-37-annular-nevanlinna.txt | 14,450 | 88e9839a24a4db3a87498c459068ee1a4a80e2cb2883add6679c788397cba436 |
| Quang arXiv PDF | /tmp/frontier-37-annular-sharing.pdf; <https://arxiv.org/pdf/2202.09523> | 204,053 | d94b7a25ed813af15050a984b91e4cfd0172eed71d530e2105b376453d04f62f |
| Quang extracted text | /tmp/frontier-37-annular-sharing.txt | 32,254 | be40a0d6414af022e9444aed46503008d4c2d59a81c59e59e5a5f31aa9625723 |
