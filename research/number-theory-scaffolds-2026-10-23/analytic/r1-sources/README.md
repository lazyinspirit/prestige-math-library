# R1 source ledger

**Read date:** 2026-10-23. **Owner:** analytic number theory researcher R1.

This ledger records full-text materials actually retrieved and read, with the
section or page range used and the local source path. A secondary statement or
survey mention is not treated as a proof. Local R1-owned files live in this
directory; source files in `analytic/r2-sources` or `algebraic/r2-sources` are
named in place and were not copied into this directory.

## Analytic foundations and classical prime distribution

### Ben Green, *The Prime Number Theorem*

- **Source:** Oxford course notes, full PDF at
  <https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf>.
- **Local files:** `green-prime-number-theorem.pdf` and
  `green-prime-number-theorem.txt`.
- **Extent read:** all 77 physical pages; chapters 1–10, appendices A–B, and
  their bibliography. Chapter locators are printed pp. 3–64, appendices A–B
  pp. 65–72.
- **Results harvested:** elementary prime bounds; Möbius inversion and
  arithmetic functions; Dirichlet series and zeta continuation; Fourier
  analysis and Poisson summation; the gamma factor and zeta functional
  equation; Hadamard product; smoothed explicit formula (Theorem 7.1) and its
  contour proof; PNT; the classical zeta zero-free region and PNT error; RH
  consequences; introductory Selberg sieve.
- **Disposition:** arithmetic functions, zeta continuation, PNT, zeta explicit
  formula, zero-free region, and Perron/Tauberian suppliers are already
  published in the existing `number-theory` library and are reused. Chapter 7
  is the proof model for the new Dirichlet-character and Hecke explicit
  formulae. Chapter 10 belongs to R2. RH consequences are conditional and are
  not used as unconditional inputs.

### Jan-Hendrik Evertse, *Analytic Number Theory: Prime Number Theory*

- **Source:** complete author-hosted lecture-note series and index at
  <https://pub.math.leidenuniv.nl/~evertsejh/jhelecturenotes.shtml>.
- **Local files:** `evertse-ant-ch1.pdf/.txt` through
  `evertse-ant-ch6.pdf/.txt`.
- **Extent read:** each complete chapter PDF and extracted text. Original
  printed ranges: Ch. 1 pp. 61–74; Ch. 2 pp. 75–90; Ch. 3 pp. 91–114;
  Ch. 4 pp. 115–149; Ch. 5 pp. 151–164; Ch. 6 pp. 165–178.
- **Results harvested:** Ch. 2 arithmetic functions, convolution,
  Dirichlet series and Euler products; Ch. 3 characters, conductors, Gauss
  sums, and Pólya–Vinogradov; Ch. 4 analytic continuation and functional
  equations; Ch. 5 a Newman/Korevaar Tauberian proof; Ch. 6 fixed-modulus PNT
  in AP, an explicit zeta formula (Theorem 6.3.1, proof referred to
  Davenport), Landau–Page and Siegel statements (Theorems 6.3.3–6.3.4),
  Siegel–Walfisz, zero density, Bombieri–Vinogradov, and Linnik.
- **Disposition:** Chs. 2–5 overlap with existing library suppliers and are
  reused as expository context. Fixed-modulus AP PNT is already present; SW
  and BV belong to R2. Ch. 6 states Landau–Page and Siegel bounds but does not
  prove their deep inputs locally; R1 instead uses the full Weiss and Siegel
  sources below. The book's old least-prime numerical record is not cited as
  current. Ch. 1's prime-gap discussion and Ch. 4's exercise claiming a 2026
  irrationality result are not used as status evidence.

### Montgomery–Vaughan, *Multiplicative Number Theory III*

- **Source:** complete author-hosted course text,
  <https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf>.
- **Local files:** `vaughan-mnt3-571s25.pdf` and
  `vaughan-mnt3-571s25.txt`.
- **Extent read:** complete printed Ch. 24 §§24.1–24.3 (pp. 40–71), including
  the Vinogradov mean-value proof, its exponential-sum application and the
  full Korobov–Vinogradov zero-free-region section; all of Ch. 27, “Large
  Values of Dirichlet Polynomials,” pp. 148–183; all of Ch. 28, “Zero Density
  Theorems,” pp. 184–251; and all of Ch. 29, “Primes in Short Intervals,”
  pp. 252–305. The listed sections include theorem proofs, exercises, notes,
  and references. For the Korobov–Vinogradov deduction, the exact statements
  and proofs of the supporting Theorems 24.13, 24.15, 24.18, and 24.19 were
  checked; Theorem 24.17 explicitly rescales an earlier generic logarithmic-
  derivative lemma, so that elementary complex-analysis input remains
  separately identified rather than attributed to §24.3.
- **Results harvested:** Ch. 24 §§24.1–24.3: Theorem 24.5's explicit
  Vinogradov mean-value estimate; Theorem 24.13's higher-derivative
  exponential-sum bound; the Hurwitz-zeta estimate and Dirichlet-L conversion
  (Theorem 24.15/Corollary 24.16); the rescaled log-derivative estimate
  (Lemma 24.17); the Riemann zeta Korobov–Vinogradov region and log-derivative
  estimates (Theorem 24.18); and the Dirichlet-L region with at most one real
  exceptional zero for a real character (Theorem 24.19). Ch. 27 unconditional
  large-value Theorems 27.3–27.4 and related character-sum variants; Ch. 28
  definitions of `N`, `N1`, `N2`, Mellin-weighted zero detection, the Ingham
  and Huxley density bounds (Theorems 28.4 and 28.6), the (12/5) corollary,
  short-interval results, the logarithm-free zero-density bound and
  Deuring–Heilbronn theorem (Theorem 28.14 and Corollary 28.15), Linnik's
  theorem, and Maier's irregularity theorem; Ch. 29's Guth–Maynard
  zero-detection/short-interval framework.
- **Disposition:** Ch. 24's Korobov–Vinogradov zeta region is an exact
  prerequisite for the Balasubramanian–Ramachandra coefficient-count
  theorem used by Lamzouri. It is not conflated with the classical
  `1/log T` region; Theorem 24.17's generic logarithmic-derivative lemma
  and the low-height compact argument must be supplied explicitly in the
  local proof chain. Ch. 27–28 statements and proof methods supply historical
  and reproducible intermediate estimates; R1 plans selected zero-density
  and repulsion results as local theorems. Ch. 29 is method context; the 2026
  Guth–Maynard primary paper below supplies the newer theorem. Conditional
  results remain conditional. No “best known” claim is inferred from this
  course text.

### D. R. Heath-Brown, “The Density of Zeros of Dirichlet's L-Functions”

- **Source:** *Canadian Journal of Mathematics* 31(2) (1979), 231–240,
  DOI <https://doi.org/10.4153/CJM-1979-024-0>.
- **Local files:** `heath-brown-density.pdf` and
  `heath-brown-density.txt`.
- **Extent read:** the complete 10-page article, including all three theorem
  statements, proof sections, and references. The displayed estimates were
  checked against the printed scan where OCR was poor.
- **Results harvested:** with `N(σ,T,χ)` counting nontrivial zeros with
  multiplicity for primitive characters, the aggregate estimate
  
  `Σ(Q) = Σ_{q≤Q} Σ*_{χ mod q} N(σ,T,χ) ≪ (Q²T)^{A(σ)(1−σ)+ε}`.
  
  Theorem 1 gives `A=2` for `11/14≤σ≤1`; Theorem 2 gives exponent of `Q`
  corresponding to `α=6/5` and `A(σ)=5/(3−σ)` (with the stated alternative
  bound); Theorem 3 gives `A=2` for `129/167≤σ≤1`. At `Q=1`, Theorem 1 is
  `N(σ,T)≪T^{2(1−σ)+ε}`.
- **Disposition:** theorem statements and the complete proofs are R1 density
  suppliers. No present-day record claim is made.

## Current zero-density and short-interval result

### Larry Guth and James Maynard, “New Large Value Estimates for Dirichlet Polynomials”

- **Source:** accepted full text in the Oxford Research Archive,
  <https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v>;
  published in *Annals of Mathematics* 203(2) (2026), 623–675,
  DOI <https://doi.org/10.4007/annals.2026.203.2.6>. Official publication
  page: <https://annals.math.princeton.edu/2026/203-2/p06>.
- **Local files:** `guth-maynard-large-values-author-accepted.pdf` and
  `guth-maynard-large-values-author-accepted.txt`.
- **Extent read:** entire 52-page accepted manuscript and its proofs,
  introduction, references, and appendices.
- **Results harvested:** Theorem 1.1's large-values estimate for coefficients
  (|b_n|≤1) and 1-separated sample ordinates; Theorem 1.2's zero-density
  bound `N(σ,T)≤T^{15(1−σ)/(3+5σ)+o(1)}`; Corollary 1.3's prime asymptotic
  for intervals `y∈[x^{17/30+ε},x^{0.99}]`; and Corollary 1.4's almost-all
  interval result from `y≥X^{2/15+ε}`.
- **Disposition:** planned as proved, dated results with local proof
  obligations, not as an asserted exhaustive frontier or “world record.”

### Caroline L. Turnage-Butterbaugh, “A Decades-Long Breakthrough in Zero-Density Estimates and Primes in Short Intervals”

- **Source:** arXiv:2607.04632v1,
  <https://arxiv.org/abs/2607.04632v1>.
- **Local files:** `turnage-butterbaugh-zero-density-survey-arxiv2607.04632.pdf`
  and `.txt`.
- **Extent read:** the complete distributed 21-physical-page PDF and its full
  extracted text (1,984 lines; 8,671 words), all internal sections 1–7.
- **Disposition:** secondary survey for historical and methodological
  context only. Its mentions do not establish theorem statements or current
  records; primary Guth–Maynard paper above is the proof supplier.

## Dirichlet and Hecke zero-free regions, zero density, and Chebotarev

### Jesse Thorner and Asif Zaman, “A bound for the least prime ideal in the Chebotarev density theorem”

- **Source:** *Algebra & Number Theory* 11(5) (2017), 1135–1197,
  DOI <https://doi.org/10.2140/ant.2017.11.1135>; full publisher PDF
  <https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf>.
- **Local files:** `thorner-zaman-explicit-least-prime-2017.pdf` and `.txt`.
- **Extent read:** entire paper Sections 1–8, including analytic estimates,
  zero-free regions, large sieve/power sums, log-free density, and zero
  repulsion; application Sections 9–12 were inspected as context but are not
  used as R1 suppliers.
- **Results harvested:** Theorem 3.2's explicit Hecke log-free density
  estimate and Theorem 3.3's Deuring–Heilbronn zero repulsion, with the
  complete internal proof chain through the power-sum method, smoothed
  Selberg-sieve mean square, large-sieve bounds, and ideal-sum estimates.
  The proof of Theorem 3.2 also invokes Weiss 1983, Theorem 4.3; the full
  primary Weiss source is now locally available and read below.
- **Disposition:** local Hecke density/repulsion suppliers; §9–12 least-prime
  applications are deferred. Older numerical exponents are not described as
  current records.

### Jesse Thorner and Asif Zaman, “A Chebotarev variant of the Brun–Titchmarsh theorem and bounds for the Lang–Trotter conjectures”

- **Source:** arXiv:1606.09238v2,
  <https://arxiv.org/abs/1606.09238v2>.
- **Local files:** `thorner-zaman-chebotarev-brun-titchmarsh-2018.pdf` and
  `.txt`.
- **Extent read:** entire 26-page article, including Sections 1–6, proof of
  Theorem 4.5, and references.
- **Results harvested:** Theorem 4.5's base log-free Hecke zero-density
  estimate `N(σ,T)≪(e^{162 L}T^{81n_K+162})^{1−σ}` for `0<σ<1,T≥1`.
  The article itself calls this a rephrasing of Thorner–Zaman 2017,
  Theorem 3.2; it is not counted as a separate proof source.
- **Disposition:** proof cross-check and base-estimate interface. Its
  Chebotarev–Brun–Titchmarsh applications are not duplicated as R1 items.

### Jesse Thorner and Asif Zaman, “A unified and improved Chebotarev density theorem”

- **Source:** arXiv:1803.02823v3 (2018); published *Algebra & Number Theory*
  13(5) (2019), 1039–1068, DOI <https://doi.org/10.2140/ant.2019.13.1039>;
  full publisher PDF <https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf>.
- **Local source owned by algebraic R2:**
  `research/number-theory-scaffolds-2026-10-23/algebraic/r2-sources/thorner-zaman-unified-chebotarev.pdf`
  and `.pdf.txt`.
- **Extent read:** the complete 26-page published article, all Sections 1–7
  and Appendix A, including proofs of Theorems 1.1/1.4 and 3.1–3.3.
- **Results harvested:** Theorem 3.1 zero-free region, Theorem 3.2
  log-free density with `B1=min{1,(1−β1)log(𝒬Tn_K)}`, Theorem 3.3 Stark
  lower bound, and Theorems 1.1/1.4 effective Chebotarev asymptotics.
  Theorem 3.1 cites Weiss 1983, Theorem 1.9; Theorem 3.2's proof combines
  Thorner–Zaman 2017, Theorem 3.2, Weiss 1983, Theorem 4.3, and Stark's
  exceptional-zero bound. These are mapped to local prerequisite items,
  rather than treating citations as proof.
- **Disposition:** downstream consumer and strengthened, more
  parameter-sensitive Chebotarev result. It does not replace Lagarias–Odlyzko's
  simpler base-field GRH/unconditional theorems or their natural-density
  derivation.

### Asif Zaman, *Analytic Estimates for the Chebotarev Density Theorem and Their Applications*

- **Source:** author-hosted full dissertation,
  <https://www.math.toronto.edu/zaman/files/thesis.pdf>.
- **Local files:** `zaman-thesis-analytic-estimates-chebotarev-2017.pdf` and
  `.txt`.
- **Extent read:** complete Chapter 5, printed pp. 115–138 (Sections 5.1–5.4,
  including the full proof of Theorem 5.1.1), and the adjacent chapter
  definitions/proof interfaces used there.
- **Disposition:** full proof-context cross-check for the power-sum Hecke
  density method. Primary Thorner–Zaman 2017 and Weiss papers supply the
  planned theorems; the thesis's later least-prime applications are not
  duplicated.

### A. R. Weiss, “The least prime ideal”

- **Source:** *Journal für die reine und angewandte Mathematik* 338 (1983),
  56–94. Full Göttingen Digitalisierungszentrum journal-volume scan:
  <https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf>.
- **Local files:** `weiss-least-prime-1983-volume-338.pdf` (complete 225-page
  volume scan). This is an image-only scan; the local source has no OCR text
  layer. The article itself is printed pp. 56–94 (scan pages 61–99).
- **Extent read:** complete article Sections 1–4, printed pp. 56–84, including
  the full proof of Theorem 4.3 on printed pp. 76–84. Sections 5–6 are
  applications to least-prime problems and are mapped to defer/no duplicate.
  The theorem statements and calculations were read from rendered page images;
  no snippet or abstract is used.
- **Results harvested:** §1, completed Hecke L-functions, Hadamard product,
  log-derivative estimates, Stark's Landau–Page region (Theorem 1.7), and
  Hecke-family Landau–Page theorem (Theorem 1.9). §2, ideal-sum asymptotics
  and partial summation. §3, smoothed Selberg-sieve mean-square estimate
  (Theorem 3.7). §4, zero detection and the field-uniform log-free density
  theorem (Theorem 4.3). For `ℒ=log(QT^{n_K})`, `T≫1`,
  `c6≤α≤1−c7/ℒ`, `d(H)≤Q`, and
  `q(H)=n_K² h_H d(H)`, it states
  `N_H*(α,Q,T) ≪ Δ*(Q_H T^{n_K})^{c8(1−α)}`,
  where `Q_H=max(q(H)^{1/2},Q)` and `Δ*=(1−β*)ℒ` for the possible unique
  exceptional real simple zero, otherwise an absolute constant. The proof
  reduces to primitive congruence groups, uses Theorem 1.9 and its local
  log-derivative bounds, the elementary ideal estimates of §2, and Theorem
  3.7; it does not leave the exceptional-factor density to a citation.
- **Disposition:** direct local source for the Hecke Landau–Page and
  exceptional-sensitive zero-density items. Its least-prime applications
  (§§5–6) are deferred.

### H. M. Stark, “Some Effective Cases of the Brauer–Siegel Theorem”

- **Source:** *Inventiones Mathematicae* 23 (1974), 135–152,
  DOI <https://doi.org/10.1007/BF01405166>. Göttingen volume scan:
  <https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf>.
- **Local file:** `stark-effective-brauer-siegel-1974.pdf`, complete volume
  scan; article pages are image-only.
- **Extent read:** complete article, printed pp. 135–152 (physical scan pages
  142–159), visually read page by page. An attempted publisher download was
  an HTML paywall page and was discarded; it is not a source file.
- **Results harvested:** Theorem 1′ p. 148 and its proof in §4. For a number
  field `E` of degree `n_E`, a real exceptional zero `β_E` of `ζ_E` satisfies
  `β_E < max{1−(ν_{n_E} log|D_E|)^{-1},
  1−(c_8 |D_E|^{1/n_E})^{-1}}`, with effective `c_8`,
  `ν_n=4` for `E/Q` Galois, `16` for a normal tower, otherwise `4n!`.
  Sections 2–3 prove the log-derivative, zero-count, and residue estimates
  used in the argument; §4 proves Theorems 1′ and 2′; §5 records consequences.
- **Disposition:** exact Stark supplier for LO's exceptional Dedekind-zero
  term and T–Z's derived relative Hecke exceptional-zero estimate. The
  stronger Artin-holomorphy branch of Theorem 1′ is not needed.

### Lagarias–Odlyzko, “Effective Versions of the Chebotarev Density Theorem”

- **Source:** *Algebraic Number Fields: L-functions and Galois Properties*
  (Fröhlich, ed.), Academic Press (1977), printed pp. 409–464. The locally
  available complete source is a 41-page TeX re-typesetting at
  <https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf>;
  the authors' publication list confirms the bibliographic locator at
  <https://websites.umich.edu/~lagarias/PUBLICATIONS/papers.html>.
- **Local files:** `lagarias-odlyzko-effective-chebotarev-1977.pdf` and
  `.txt`. This is the complete article re-typeset, not a publisher scan.
- **Extent read:** all nine article sections and bibliography, complete.
- **Results harvested:** Theorem 1.1, GRH for `ζ_L`, all `x>2`,
  `|π_C(x)−(|C|/|G|)Li(x)| ≤ c1[(|C|/|G|)x^{1/2}log(Δ_L x^{n_L})+log Δ_L]`;
  Theorem 1.3, unconditional effective Chebotarev for
  `x≥exp(10 n_L(log Δ_L)^2)`, with the possible real simple `β0` term
  `(|C|/|G|)Li(x^{β0})` and error
  `c3 x exp(−c4 n_L^{-1/2} sqrt(log x))`; Theorem 1.4 quotes Stark's
  bound. Proof sections 2–7 and 9 use character orthogonality/Brauer
  induction, class field theory and Hecke L-functions, conductor-discriminant,
  Mellin/Perron contour shifts, GRH zero sums, and removal of prime powers.
- **Disposition:** local source for the clean GRH and unconditional effective
  Chebotarev branches. The natural-density theorem is proved locally from the
  unconditional asymptotic by summing over all conjugacy classes and dividing
  by the total prime-ideal count. The article's quoted Stark statement is
  supplied from Stark's complete paper above.

## Numerical zero-count sources and implementation context

### David J. Platt and Tim Trudgian, “The Riemann hypothesis is true up to 3·10^12”

- **Source:** arXiv:2004.09765v1, full manuscript
  <https://arxiv.org/abs/2004.09765v1>; published *Bulletin of the London
  Mathematical Society* 53(3) (2021), DOI
  <https://doi.org/10.1112/blms.12460>.
- **Local files:** `platt-trudgian-riemann-hypothesis-3e12.pdf/.txt`.
- **Extent read:** complete 8-page paper, including interval-arithmetic and
  Turing-method argument, final theorem, and references.
- **Result:** the paper proves RH through height 3,000,175,332,800 (with the
  zero count stated in the paper). This is recorded as a dated theorem, not a
  claim about the current record.

### David J. Platt, “Isolating some non-trivial zeros of zeta”

- **Source:** accepted Bristol manuscript,
  <https://research-information.bris.ac.uk/ws/files/78836669/platt_zeta_submitted.pdf>,
  DOI <https://doi.org/10.1090/mcom/3198>; published *Mathematics of
  Computation* 86(307) (2017), 2449–2467.
- **Local files:** `platt-isolating-zeta-zeros-2017.pdf/.txt`.
- **Extent read:** complete accepted document (20 physical pages including
  cover sheet), §§3–4, Theorem 5.1, and appendices A–C.
- **Results harvested:** interval/FFT–Poisson evaluation, Turing method and
  interpolation error bounds; the paper proves simplicity and critical-line
  location of the first 12,363,153,437,138 nontrivial zeta zeros through
  height 30,610,046,000.

### David J. Platt, “Numerical Computations Concerning the GRH”

- **Source:** arXiv:1305.3087v1,
  <https://arxiv.org/abs/1305.3087v1>; published *Mathematics of
  Computation* 85(302) (2016), 3009–3027.
- **Local files:** `platt-numerical-computations-grh-2016.pdf/.txt`.
- **Local SHA-256:** PDF
  `8fd109aa21345bc3feac4fde2faa7dfb51b4ef1fc9a430f643323612a39ef417`;
  extracted text
  `7f9a6c2b9fce4dc8f0b78b9a3836c86919273cbc7c6c07c615c238e22e71fb7a`.
- **Extent read:** complete 15-page accepted article, §§2–7, both algorithms,
  error bounds, Theorems 7.1–7.2, and references.
- **Results harvested:** rigorous interval-arithmetic/Turing verification for
  primitive Dirichlet characters with conductor `q≤400,000`: for even `q`,
  height `max(10^8/q, 7.5·10^7/q+200)`; for odd `q`,
  `max(10^8/q, 3.75·10^7/q+200)`. Theorem 7.2 separately verifies central
  nonvanishing for `q≤2,000,000`.
- **Build note:** the published theorem is a rigorous finite computation, not
  a GRH assumption. Its full numerical run output/certificate is not retained
  in this source folder; the proposed local verification item is therefore
  explicitly data-gated until a replayable certificate or equivalent proof
  artifact is attached. R3's Goldbach range is contained in the stated q/T
  ranges.

### David J. Platt, *Computing Degree 1 L-Functions Rigorously* (PhD thesis)

- **Source:** author-hosted full thesis, September 2011,
  <https://people.maths.bris.ac.uk/~madjp/thesis5.pdf>. The same author's
  retrieved homepage <https://people.maths.bris.ac.uk/~madjp/> links to this
  thesis and to a separate `Datasets` page.
- **Local files:** `platt-computing-degree1-l-functions-thesis.pdf` and
  `.txt` (full 114-page PDF; text extracted locally). Exact SHA-256:
  PDF `459998faf72c2cb1a34eac15f6bfbeca62d68edfadd9e1a9b687490aef133cbf`,
  text `ff0162d67bad5d1dbdae6846b72a5b15ece3049c623aa097ffb3adeaed3ea7f5`.
- **Extent read:** complete Ch. 7 §§7.1–7.6, printed pp. 80–96; Ch. 2
  §§2.5–2.6, pp. 10–14; Ch. 3 §§3.1–3.2, pp. 15–31; Ch. 4 §§4.1–4.8,
  pp. 32–37 for method context; and all Ch. 8, pp. 97–99. This includes
  Booker’s small-q algorithm, Platt’s DFT algorithm, rigorous up-sampling,
  the GRH-verification application, and the thesis's explicit limits/future
  work. It is the complete thesis for the 2011 result, not the later 2016
  400,000-modulus result.
- **Result and disposition:** Thm. 7.4.1 proves GRH for primitive Dirichlet
  characters with `q≤100,000` and `qT=100,000,000`; §§7.4.2.1–7.4.2.4
  describe the computation, not a stored certificate dataset. The thesis
  specifies 1,847,865,074 primitive characters and about `9.2·10^12` zeros
  for that run. Thm. 7.6.1 proves central nonvanishing through `q≤2,000,000`.
  The thesis contains algorithm derivations and implementation descriptions,
  not the C/C++ source repository or per-character interval/Turing output.
  It therefore provides the full 2011 method context, not the finite data
  needed to replay Helfgott's larger range.

### Platt public source and dataset availability check

- **Retrieved author page:** `platt-homepage.html`, exact URL
  <https://people.maths.bris.ac.uk/~madjp/>. It links to the 2011 thesis,
  Bristol Pure, teaching notes, and `Datasets/Datasets.html`; it does not link
  to a GRH-verification code repository or zero-output file. SHA-256
  `4f4e1df2821af5731dc6b57340b8f8c1a056b71406ba53beb66d2c004f85a942`.
- **Dataset index:** `platt-datasets-index.html`, exact URL
  <https://people.maths.bris.ac.uk/~madjp/Datasets/Datasets.html>. The full
  page has one link, “Zeros of the Selberg zeta-function for
  PSL(2,Z)\\H” (`Selberg.txt`); it is not Dirichlet-L verification data.
  SHA-256 `d54b766f7b06a357274bc1ea61dd936edcd3d9c8f4ebc1f1da1a97414abf933f`.
- **Archived homepage inventory:**
  `platt-homepage-wayback-cdx.json` is the recorded response to the exact
  query `https://web.archive.org/cdx/search/cdx?url=people.maths.bris.ac.uk/~madjp/*&output=json&filter=statuscode:200&collapse=urlkey`.
  Its indexed public files include the homepage, thesis PDF, teaching files,
  and the Selberg-zeta dataset, but no GRH output or source bundle. This is a
  bounded site-archive check, not a claim that no copy exists anywhere.
  The saved response SHA-256 is
  `5551d60c2c59d98a3c7efbf4ecb6bcdd499edd9818bbf6583d7043d572899f5d`.
- **arXiv source bundle:** full v1 source package retrieved from
  <https://export.arxiv.org/src/1305.3087v1>, local
  `platt-numerical-computations-grh-arxiv-v1-source.tar.gz`, SHA-256
  `a9fde0b0d27f424a028e426893438e6f531f47a5d48a358b0869bdbf5af28f4e`.
  The complete archive contains only `platt-grh.tex` and `platt-grh.bbl`
  (45,712-byte TeX and 3,565-byte bibliography); no code, per-character
  output, or certificate is bundled. The TeX was inspected for artifact links.
- **Official Bristol publication record:**
  <https://research-information.bris.ac.uk/en/publications/numerical-computations-concerning-the-grh/>;
  locally saved as `platt-bristol-pure-record.html`, SHA-256
  `a5f7e227e912d22accb6423a26bafc85a5116aff0b8a3841e417ad6a3ca63876`.
  It identifies the peer-reviewed 2016 article and links only a 332 KB
  accepted-author-manuscript PDF, not a code or numerical-data supplement.
  Its direct PDF URL is
  <https://research-information.bris.ac.uk/files/67056136/platt_grh3.0.pdf>
  (the browser fetch returned HTTP 403 in this audit). The complete arXiv
  article above remains the locally retrieved/read source text.
- **Separate LMFDB zero sample:** the official record for one Dirichlet
  L-function says the database's Dirichlet data were computed by Platt using
  the 2011 thesis algorithms. Saved as `platt-lmfdb-source-record.html`,
  exact URL
  <https://www.lmfdb.org/L/1/4161/4161.1367/r1/0/0/Source>, SHA-256
  `ca11c1cb1140556c335491532bc5eaa7c0eb9f9727b906da0cc05281c1dc124b`.
  The indexed public table
  <https://numberdb.org/Zeros_of_Dirichlet_L_functions>, saved as
  `numberdb-dirichlet-zero-table.html`, SHA-256
  `48f926e22b5b4c992e0d43cc1560d2d765426c522a3125c877e385ff6b91b1d6`,
  explicitly says it is incomplete: it covers primitive conductors `q≤11`
  and the first 25 ordinates for each character (with both signs for
  non-real characters). It says those values are transcribed from LMFDB and
  does not independently certify the displayed rounding. This small sample
  is not the 2016 q≤400,000 run output, character roster, or replay
  certificate.
- **2016 article hashes:** local complete article
  `platt-numerical-computations-grh-2016.pdf/.txt`; SHA-256 PDF
  `8fd109aa21345bc3feac4fde2faa7dfb51b4ef1fc9a430f643323612a39ef417`,
  extracted text `7f9a6c2b9fce4dc8f0b78b9a3836c86919273cbc7c6c07c615c238e22e71fb7a`.
- **Availability conclusion as checked on 2026-10-23:** the primary 2016
  article and full 2011 thesis establish the algorithm and their finite
  theorem statements, but the checked author page, author dataset index,
  archived page inventory, and article source package do not provide the
  2016 q≤400,000 run output or a standalone replay certificate. Do not mark
  independent local replay as closed unless such an artifact is later
  supplied.

### Trudgian, “Improvements to Turing's Method” and “Improvements to Turing's Method II”

- **Sources:** first, arXiv:0903.1885v3,
  <https://arxiv.org/abs/0903.1885v3>, published *Mathematics of Computation*
  80(276) (2011), 2259–2279, DOI
  <https://doi.org/10.1090/S0025-5718-2011-02470-1>; second,
  arXiv:1406.3416v2, <https://arxiv.org/abs/1406.3416v2>, published *Rocky
  Mountain Journal of Mathematics* 46(1) (2016), 325–332.
- **Local files:** `trudgian-turing-method-2011.pdf/.txt` and
  `trudgian-turing-method-ii.pdf/.txt`.
- **Extent read:** complete first 21-page article and complete second 7-page
  article, all theorem proofs and references.
- **Results harvested:** explicit integral bounds for `S(t)` in Turing's
  zero-count method for zeta, Dirichlet L, and Dedekind zeta in the first
  paper; improved zeta integral bounds in the second. These are algorithmic
  ingredients, separate from the finite GRH conclusions.

### FLINT zero-computation documentation

- **Sources:** current official generated documentation pages
  <https://flintlib.org/doc/acb_dirichlet.html> and
  <https://flintlib.org/doc/arb.html> (zero-computation section).
- **Local files:** `flint-acb-dirichlet-docs.html/.txt` and
  `flint-zeta-zero-docs.html/.txt`.
- **Extent read:** both complete locally captured documentation pages.
- **Disposition:** implementation/API and algorithm context only. The zeta
  zero page labels generated portions; none of this documentation is used as
  a theorem or proof source.

## Algebraic analytic inputs read for this track

### Jürgen Neukirch, *Algebraic Number Theory*

- **Source:** English translation by Norbert Schappacher, Springer (1999),
  book DOI <https://doi.org/10.1007/978-3-662-03983-0>.
- **Local files owned by algebraic R2:**
  `research/number-theory-scaffolds-2026-10-23/algebraic/sources/neukirch-algebraic-number-theory.pdf`
  and `.txt`.
- **Extent read:** complete Chapter VII §§1–8 (printed pp. 419–503), §10
  through Theorem 10.6 (pp. 517–526), and all §13 (pp. 543–549). Chapter VII
  §9 on special values (pp. 504–516) and §11 onward are not used here.
- **Results harvested:** Mellin principle and one-dimensional zeta/Dirichlet
  L groundwork (§§1–2); full-rank lattice Poisson, higher theta series and
  gamma factors (§§3–4); Dedekind zeta analytic continuation, functional
  equation and residue/analytic class-number formula (§5, especially
  Theorem 5.9 and Corollaries 5.10–5.11); finite-order Grössencharakter
  definitions, conductors and ray-class interpretation (§6); theta
  transformation formula (§7, Theorem 7.7); finite-order Hecke L continuation
  and functional equation (§8, Theorem 8.5); Artin L factorization and
  abelian Artin–Hecke comparison (§10, Corollary 10.5 and Theorem 10.6);
  ray-class Dirichlet-density theorem and Hecke `L(1,χ)≠0` proof (§13,
  Theorem 13.2 and Lemma 13.3); the general Dirichlet-density Chebotarev
  theorem (Theorem 13.4) and the Galois-closure criterion for completely split
  primes (Corollaries 13.6–13.7).
- **Nonvanishing proof chain:** Lemma 13.3 uses ray-class field existence
  from CFT, Theorem 10.6 to identify an abelian Artin L-function with the
  Hecke L-function up to finitely many nonzero Euler factors, Corollary 10.5
  to factor `ζ_L/ζ_K` into nontrivial characters, §5's simple poles of
  `ζ_L` and `ζ_K`, and §8's holomorphy of the nontrivial factor at 1. This
  gives a nonzero product and hence each factor is nonzero. §13 proves
  Dirichlet density only; its definition notes natural density implies
  Dirichlet density, not conversely.
- **Disposition:** proof source for new general Dedekind-zeta/Hecke items and
  the ray-class Dirichlet-density supplier consumed by ANT R2. The completely
  split-prime Dirichlet-density theorem is proved directly from the logarithmic
  Euler product for ζ_M on the Dedekind-zeta A page and does not depend on ANT
  R2's general Chebotarev theorem. Chapter VII §13 is not used as a
  natural-density proof.

### J. S. Milne, *Class Field Theory*

- **Source:** full author-hosted notes,
  <https://www.jmilne.org/math/CourseNotes/CFT.pdf>.
- **Local files owned by algebraic R2:**
  `research/number-theory-scaffolds-2026-10-23/algebraic/r2-sources/milne-class-field-theory.pdf`
  and `.pdf.txt`.
- **Extent read:** Chapter VI §2, pp. 183–191; §4's Theorems 4.8–4.10,
  pp. 197–200; Chapter III Theorem 3.23 and Remark 3.26(d), p. 164.
- **Disposition:** useful cross-check and CFT proof context, not R1's sole
  analytic supplier. Proposition VI.2.8 cites Lang for the ideal-counting
  asymptotic; VI.2.9/2.12 derive partial/Dedekind zeta poles. VI.4.10 proves
  Hecke L(1,χ) nonvanishing via class-field existence. Remark III.3.26(d)
  explicitly distinguishes natural from Dirichlet density and does not prove
  the natural-density assertion.

### C. L. Siegel, “Über die Classenzahl quadratischer Zahlkörper”

- **Source:** *Acta Arithmetica* 1 (1935), 83–86,
  DOI <https://doi.org/10.4064/aa-1-1-83-86>; journal record and download
  <https://www.impan.pl/get/doi/10.4064/aa-1-1-83-86>.
- **Local files:** `siegel-class-number-quadratic-fields-1935.pdf` and
  `.txt`. The complete scan is image-only (three physical two-page spreads);
  `.txt` is an empty extraction, not an OCR transcript.
- **Extent read:** all four printed article pages pp. 83–86 plus adjacent
  scan context pp. 82 and 87, visually read page by page.
- **Results harvested:** the original ineffective class-number argument
  proves `log L_d(1)=o(log |d|)` for fundamental quadratic discriminants, via
  the Dirichlet class-number formula, completed Dedekind zeta integral
  representation, a biquadratic zeta factorization, and a contradiction using
  four auxiliary lemmas. Thus for every `ε>0`,
  `L(1,χ_d) ≫_ε |d|^{-ε}` with an ineffective constant. Since every
  primitive real nonprincipal Dirichlet character is a quadratic Kronecker
  character of a fundamental discriminant, this supplies the real-character
  `L(1,χ)` bound. R1 derives the zero-distance form using a local
  near-one derivative estimate.
- **Disposition:** primary proof source for the Siegel ineffective input;
  the theorem is not described as effective.

## Divisor, circle, Voronoï, and exponent-pair sources

This branch was added on 2026-10-23 to extend the existing summatory-divisor
and two-square-representation suppliers. It treats the squared-radius
normalization of the circle problem. The 2026 article and preprint statements
below are recorded as dated results from their own sources; they are not used
to claim an exhaustive or current best-bound record.

R3's current source review is
`../r3-sources/divisor-voronoi-source-review.md` (SHA-256
`24a14e13b9e8de57d354fec87325bb55927440bfee94d219584083b3b80071be`). Its
full Meurman read closes the endpoint-averaged pointwise divisor Voronoï
identity. The wider weighted test-function formula remains gated: Ivić's
Chapter 3 delegates difficult integer-endpoint convergence to
Dixon–Ferrar/Titchmarsh, and the other full/read-access candidates did not
yield a complete proof of the arbitrary `C²[a,b]` test class. The earlier
Chandrasekharan Ch. VIII preview (only pp. 194–195 of pp. 194–228), Huxley
and Heath-Brown OUP 403s, Titchmarsh subscription metadata, and Nasim's AMS
PDF challenge remain enumerated access history, not proof that no copy exists
elsewhere.

### Stephen D. Miller and Wilfried Schmid, “Summation Formulas, from Poisson and Voronoi to the Present”

- **Source:** arXiv:math/0304187v1, complete 22-page article,
  <https://arxiv.org/pdf/math/0304187v1>.
- **Local files:** `ivic-summation-formulas-poisson-voronoi-arxiv-math0304187.pdf`
  and `.txt`; the PDF is the retrieved full-text source and the text is its
  local extraction.
- **SHA-256:** PDF
  `20a929c58390cefb3664f58f81ac704c99b1c665da17c8a6996ad31647b102af`;
  text `c0abaf97f2d63064edf6920e8803d76e3febe0c0ff696f638db975c8e6d0f2e6`.
- **Extent read:** the entire paper, §§1–6, all displayed formulas, proofs,
  and references. The decisive locators are §1, formulas (1.3)–(1.7), and
  §6, formulas (6.1) onward through its Poisson-summation proof of the circle
  bound.
- **Results harvested:** §1 records the divisor error
  `D(X)=Σ_{n≤X}d(n)−X log X−(2γ−1)X`, the representation count
  `r₂(n)=#{(a,b)∈Z²:a²+b²=n}`, and the circle remainder
  `Σ_{n≤X}r₂(n)−πX`. It states the weighted divisor Voronoï formula
  (1.6), with kernel `4K₀(4π√(nx))−2πY₀(4π√(nx))`, and the two-square
  formula (1.7), with kernel `πJ₀(2π√(nx))`; both are stated for the article's
  piecewise-continuous, piecewise-monotone test functions and endpoint/jump
  averaging convention. The article explicitly refers elsewhere for details
  of the divisor formula (1.6), and cites Hardy/Sierpiński for proof of
  (1.7), so these formula displays are not represented as locally proved by
  this survey. Section 6 does give a full direct two-dimensional Poisson
  argument for the weaker but explicit circle estimate `Oε(X^{1/3+ε})`,
  including smoothing, Fourier/Bessel evaluation, and error bounds.
- **Disposition:** reuse the article's circle proof as a complete Poisson
  application; use the formulas as exact normalization/context. The divisor
  Voronoï proof remains dependent on the additional full primary source being
  checked by R3; do not claim Miller–Schmid alone proves it. Its GL(2)/GL(3)
  discussion in §§4–5 is background and is not a supplier for this classical
  GL(1) divisor/circle formula.

### G. A. Kolesnik, “On the method of exponent pairs”

- **Source:** *Acta Arithmetica* 45 (1985), no. 2, 115–143,
  DOI <https://doi.org/10.4064/aa-45-2-115-143>; publisher scan obtained at
  <https://www.impan.pl/shop/publication/transaction/download/product/104633>.
- **Local files:** `kolesnik-on-method-exponent-pairs-1985.pdf` and
  `kolesnik-on-method-exponent-pairs-1985.txt`; the publisher PDF is a
  15-page image scan. Rendered pages are in `kolesnik-1985-pages/`.
- **SHA-256:** PDF
  `d3c09df58f8f0109fd966ae0da0bc752c9738d6d92e5eaa9376dbb88bf598347`;
  text extraction
  `f06090b232c501b03d13e6c7fe1556c138ea7eb335f000149a4587e3c00dfc5d`.
  The text file is effectively empty because the source scan has no text
  layer; all 15 pages were visually read from the rendered source.
- **Extent read:** complete article, printed pp. 115–143 (scan's 15 pages),
  including Sections 1–6, all proofs on printed pp. 120–141, and references.
- **Results harvested:** Section 1 gives the paper's multidimensional
  exponential-sum setup and exponent-pair definition; the paper studies the
  A and B processes, proves its stated transformations/theorems under the
  listed derivative and nondegeneracy conditions, and its final section
  describes the pair-generation method and its limits. The B process uses
  Poisson summation and stationary phase; the hypotheses are part of the
  statement and cannot be omitted in a generic “exponent pairs improve
  sums” item.
- **Disposition:** planned as a bounded theorem/operation supplier only for
  the exact Kolesnik setup and hypotheses. It is not a self-contained proof
  of the classical Dirichlet divisor bound. R3's source audit identified
  Meurman's complete proof of the endpoint-averaged pointwise Voronoï
  identity; the broader arbitrary-test K₀/Y₀ transform and a complete
  imported exponent-pair-to-DDP bound remain gated, as recorded in
  `../r3-sources/divisor-voronoi-source-review.md`.

### Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”

- **Source:** arXiv:2308.14859v2, version dated 14 September 2023,
  <https://arxiv.org/pdf/2308.14859v2>; full source bundle
  <https://export.arxiv.org/src/2308.14859v2>.
- **Local files:** `li-yang-divisor-circle-arxiv2308.14859v2.pdf`, `.txt`,
  and `li-yang-divisor-circle-arxiv2308.14859v2-source.tar.gz`.
- **SHA-256:** PDF
  `c1e3578d9330bf6910559eb40e8e1d82e281c964487e5330de3d2a63cb2b38ad`;
  text
  `f5333acfd12be8be7b260f884de36d3f299e27cef9826f28419425817179485c`;
  source archive
  `cdeb2c57d246808bf4d37e7c1678a898c0925deee89fc03660b2ef533171c084`.
- **Extent read:** complete 32-page v2, §§1–5, every proof, and all
  references; the complete arXiv source archive was also retrieved and
  checked.
- **Source statements harvested:** §1 defines
  `R(X)=Σ_{m²+n²≤X}1−πX` and
  `Δ(X)=Σ_{n≤X}d(n)−X log X−(2γ−1)X`. Theorem 1.2 states both are
  `Oε(X^{θ*+ε})`, where `θ*=0.3144831759741…` is defined by the unique-root
  condition in Definition 1.1. Conjecture 1.1 states exponent `1/4` for
  both. Sections 3–5 contain the first-spacing improvement, a
  Bombieri–Iwaniec/second-spacing estimate, and the reduction proving the
  theorem. The proof uses Bourgain–Watt/Huxley spacing input and
  decoupling/mean-value results; those are named as imported prerequisites,
  not as items proved by this paper. The source itself is a 2023 preprint,
  not a journal-publication claim.
- **Disposition:** record the theorem as the dated source claim, but keep its
  local proof item gated. In particular, §5 refers to withdrawn BW17 §7 for
  error and reduction details; the Li–Yang final-reduction item cannot be a
  closed supplier until that part is reconstructed from valid proof sources.
  The source's “best known” wording is historical and is not reused as a
  current status claim.

### Tom Meurman, “A Simple Proof of Voronoi's Identity”

- **Source:** *Astérisque* 209 (1992), 265–274; complete publisher-hosted
  scan <https://numdam.org/item/AST_1992__209__265_0.pdf>, record
  <http://www.numdam.org/item?id=AST_1992__209__265_0>.
- **Local full text owned by R3:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/meurman-asterisque-209-voronoi-1992.pdf/.txt`.
- **SHA-256:** PDF
  `8470bd54a894b5fe4e727b82eabf759501e5dd08598020499c532ce506b44526`;
  text `b41b35ba2559e91750bde5f45b0462b986a7a8e18ee03253d66418275fd41d8b`.
- **Extent read:** complete 11-physical-page scan, printed pp. 265–274,
  §§1–8 and references; R3's full read and detailed proof ledger are at
  `../r3-sources/divisor-voronoi-source-review.md`.
- **Result:** printed p. 265, (1.1)–(1.2): with `d(x)=0` off positive
  integers and
  `Δ_M(x)=Σ_{n<x}d(n)+d(x)/2−x(log x+2γ−1)−1/4`, for every `x>0`,
  `Δ_M(x)=(2/π)Σ_{m≥1}(d(m)/m)∫₀∞cos(2πu)sin(2πmx/u)du`. The series is
  boundedly convergent on compact positive intervals and uniformly
  convergent away from integer x. The proof includes the endpoint half
  weight and §8 convergence argument. The p. 266–267 Bessel K₁/Y₁
  evaluation is stated with a Watson citation but not used/proved in the
  proof.
- **Disposition:** full local supplier for the pointwise endpoint-averaged
  divisor identity in its integral-kernel normalization. It does not by
  itself prove the arbitrary-test weighted K₀/Y₀ formula; the distinct
  finite-interval test-function theorem remains proof-gated.

### J. Bourgain and N. Watt, “Mean Square of Zeta Function, Circle Problem and Divisor Problem Revisited”

- **Source:** arXiv:1709.04340v1, submitted 13 September 2017,
  <https://arxiv.org/pdf/1709.04340v1>.
- **Local full text owned by R3:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/bourgain-watt-zeta-circle-divisor-arxiv-1709.04340v1.pdf/.txt`.
- **SHA-256:** PDF
  `47cd84eeccd69b04aae141f4e24009102ef8883ca4da2908f90c65a6f2e5f96b`;
  text `a84c2711833f9cbeb0eaddf3af658ce54f241ca67e68deba49173f4c4aa54c06`.
- **Extent read:** R3 read the relevant proof path: §1, §3, the Theorem 3
  statement in §4, §§5–6, and §7. Sections 2 and 8 were not included in that
  proof-path read. See the R3 source review for the heading-by-heading
  disposition.
- **v1 statement (withdrawn; not used as a theorem):** Theorem 2 in §7
  stated `Δ_BW(X),R(X)=Oε(X^{517/1648+ε})`,
  where `Δ_BW(X)=½#{(m,n)∈Z²:0<mn<X}−X log X−(2γ−1)X` and
  `R(X)=#{(m,n)∈Z²:m²+n²≤X}−πX`. The proof uses §7 reductions (7.1)–(7.2)
  to sawtooth sums; the authors explicitly correct/reformulate Graham–
  Kolesnik Theorem 4.8 based on its proof p. 44. Their local bound (7.4)
  holds for `a,b∈Z`, `|a|+|b|≤1`, `3≤M≤√T`, and is
  `R(M,T;a,b)≪εT^{517/1648+2ε}`.
- **Withdrawal record:** arXiv:1709.04340v2,
  <https://arxiv.org/abs/1709.04340v2>, last revised 16 July 2023, marks the
  paper “withdrawn by Nigel Watt.” Its authors' comment says there are
  “gaps/faults” in the proofs of Propositions 2 and 3 and a similar problem
  in the proof of Proposition 1′ concerning an implicit Bourgain–Guth
  reduction, and concludes that
  “Theorems 1, 2 and 3 lose their status as theorems.” The full retrieved
  arXiv v2 abstract/status page is
  `bourgain-watt-arxiv-1709.04340v2-abs.html`, SHA-256
  `00e5d67539b63a10d73c141d584065592b859d930cc634fa7116ea9937710024`;
  locally extracted page text is `.txt`, SHA-256
  `3aa75a98a1b4af1366286825c0bdfa652613dfb3efd90e9047cc8f65bd52c1aa`.
- **Disposition:** preserve the v1 statement only as withdrawn-source
  history in a B-page remark. No theorem item or supplier edge is created
  from it. Its v1 proof's Huxley invocation is not a planned logical input.
  The strict divisor endpoint conversion is recorded as source context only;
  it does not rescue the withdrawn theorem.

### Full-text auxiliary inputs read by R3 for Li–Yang/Cen

These sources are in R3's unique source directory; the read is attributed to
R3 and the files remain there. A full text may state/prove the named analytic
input while itself importing another theorem; the latter is recorded as a
separate gate below.

#### Bourgain–Watt, “Decoupling for Perturbed Cones and the Mean Square of |ζ(1/2+it)|”

- **Source:** arXiv:1505.04161v1, 15 May 2015,
  <https://arxiv.org/pdf/1505.04161v1>; later published in IMRN 2018,
  DOI <https://doi.org/10.1093/imrn/rnw219>.
- **R3 local files:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/bourgain-watt-perturbed-cones-arxiv-1505.04161v1.pdf/.txt`.
- **SHA-256:** PDF
  `968e5bc1dca05f367fb144b1e616e331962da5ee6b8674e02ad91a0edc44cffa`;
  text `0ee5a7688c577b0936bc2240dddd34fb6c1944d02ada1693e11d7d19a8393e5f`.
- **Extent read by R3:** complete §5, “A variant of the double large sieve,”
  and complete §10 second-spacing context; the rest of the 59-page paper was
  not claimed as read for this task.
- **Result/interface:** §5, (5.1)–(5.5), proves the variant inequality for
  bounded finite sets `X,Y ⊂ R^d`, coordinate bounds `|x_i|<U_i`,
  `|y_i|<V_i`, and `2<q<∞`. Its right side is the product of the
  `(1+U_iV_i)^{1/q}` factors, `|X|^{1−2/q}`, the `q`-root of the number of
  pairs `(x,x')` in `X²` with `|x_i−x'_i|<1/V_i` for every coordinate, and
  the normalized `L^q` mean of `|Σ_{y∈Y}e(x·y)|` on
  `∏[-U_i,U_i]`. The proof uses the conditional-expectation scale split,
  Hölder/interpolation, and the pair-count identity (5.4).
- **Li–Yang use:** §4, the displayed triple-sum bound before Lemma 4.4,
  invokes [6, (5.12)] “employing the double large sieve inequality
  presented in [5, Sections 5].” This is the source for the planned distinct
  `thm-bourgain-watt-variant-double-large-sieve` item, consumed by the
  Li–Yang §4 Bombieri–Iwaniec item. It is not the proof of Huxley's
  second-spacing result. The source audit records the exact hypotheses and
  remaining Huxley gate.

#### Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in R³”

- **Source:** arXiv:2206.01093v2, 13 August 2022,
  <https://arxiv.org/pdf/2206.01093v2>.
- **R3 local files:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/guth-maldague-wave-envelope-arxiv-2206.01093v2.pdf/.txt`.
- **SHA-256:** PDF
  `430c065d8780e0a45fcc1adb393ce4024da2775c2a5421c7b8b7a4225d895fd3`;
  text `cd085a8083ae2d2bb3ffbd24307551449ecc7e4fc579f1e2d57070237f489ab2`.
- **Extent read by R3:** Theorem 2 and cone conventions in §1; Theorem 4
  context and proof path in §§2–3; the complete Theorem 2 proof in §§5–9;
  and Appendix §11.1, including proofs of Lemmas 19–20. §4, §10, and
  Appendix §§11.2 onward were outside that read scope.
- **Result/interface:** Theorem 2 states the amplitude-dependent superlevel
  wave-envelope bound for Schwartz `f` with Fourier support in the
  `R^{-1}`-neighborhood of the truncated cone. Cen et al. §6/Theorem 6.1
  uses this exact estimate. The proof's §7 invocation of GWZ20 Lemmas 4.1–4.2
  is locally supported by GM's adapted Appendix §11.1 Lemmas 19–20 and the
  standard-cone normalization/arc specialization; do not add an unproved
  GWZ20 theorem edge. Guth–Maldague Theorem 3 gives the small-cap cone
  decoupling used by Li–Yang, derived from Theorem 2.

#### Jean Bourgain, Ciprian Demeter, and Larry Guth, “Proof of the Main Conjecture in Vinogradov’s Mean Value Theorem for Degrees Higher than Three”

- **Source:** *Annals of Mathematics* 184(2) (2016), 633–682,
  DOI <https://doi.org/10.4007/annals.2016.184.2.7>; full journal PDF
  <https://annals.math.princeton.edu/wp-content/uploads/2016/07/v184-n2-p07.pdf>.
- **R3 local files:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/bourgain-demeter-guth-vmvt-annals-2016.pdf/.txt`.
- **SHA-256:** PDF
  `b19172d5169e5e3b199dc362bb955e6b4ceab296cb58f2a9d51456579fd3b946`;
  text `8b4f931426e0060ba459210009ebeb7817447d422773c98e63299ff7261d93bf`.
- **Extent read by R3:** Theorem 1.1 p. 633 and proof/context §§1–4,
  Theorem 6.6, and §§6–9 were read for the needed implication; §5 was not
  separately read in this source pass.
- **Result/interface:** for degree `5` and moment `s=15`, the mean value
  `J_{15,5}(N)≪εN^{15+ε}` is exactly the bound Cen et al. invoke in Appendix
  B. This supplier is distinct from Guth–Maldague's cone theorem.

#### N. Watt, “On the Mean Squared Modulus of a Dirichlet L-Function over a Short Segment of the Critical Line”

- **Source:** *Acta Arithmetica* 111(4) (2004), 307–403,
  DOI <https://doi.org/10.4064/aa111-4-1>.
- **R3 local files:**
  `research/number-theory-scaffolds-2026-10-23/analytic/r3-sources/watt-short-segment-dirichlet-l-mean-square-2004.pdf/.txt`.
- **SHA-256:** PDF
  `60fca37932c8dfe7f3ce5341263fcb08cb3ff273ab8d59dba2e89d2b50a3a832`;
  text `35a4b277536710fc68caf8fc5e1c877827f1b85176b61de60aa170887f778116`.
- **Extent read by R3:** theorem-1 setup and definitions; §§2–4; and all of
  §8, including Lemmas 8.1–8.2 and proofs, printed pp. 379–385. §§5–7 were
  not claimed as read in this source pass.
- **Result/interface:** Lemma 8.2's exact statement and the case bounds
  (8.17)–(8.20), with its full hypotheses through Lemma 8.1, were checked.
  Cen §5 uses `H=T^{m−τ}`, `M=T^m`, `β≤τ≤24/67`, `τ+s≤m≤1/2`, selects
  `N` from its stated `N_I,N_II,N_III` cases, takes `r=1`, rescales
  `(M*,H*,T*)=(2M,2H,2T)`, and checks Watt's equations in Cen (5.6)–(5.8).
  Watt Lemma 8.1 itself imports Huxley 1996 §§14–16 and Huxley–Watt 2000
  Lemma 5.3; those sources remain proof gates.

#### Robert–Sargos and Huxley primary-input access gates

- **Robert–Sargos:** O. Robert and P. Sargos, “Three-dimensional Exponential
  Sums with Monomials,” *J. reine angew. Math.* 591 (2006), 1–20,
  DOI <https://doi.org/10.1515/crelle.2006.012>. Cen et al. cite Theorem 2
  (§5) and Lemma 8 (§6.1), including the exponent `−1/8` and tolerance
  `O(r/Y)` in their pair-count argument. R3 found the author and publisher
  PDF endpoints blocked (403/WAF); no complete text was read. The source
  items are therefore statement contracts only and remain proof-gated.
- **Huxley:** M. N. Huxley, “Exponential Sums and Lattice Points III,”
  *Proc. London Math. Soc.* 87(3) (2003), 591–609,
  DOI <https://doi.org/10.1112/s0024611503014485>. R3 could not obtain the
  full primary article. BW v1 restates Huxley's Theorem 1 with
  `κ=3/10`, `λ=57/140`, conditions (1.5)–(1.9), (1.13)–(1.14), and constants
  `C₁=…=C₄=14`, `C₅=C₆=1`, but BW v2 withdrawal means that restatement is not
  used as an established supplier. Li–Yang separately imports Huxley
  second-spacing estimates; retain that source gate until a readable primary
  proof/source is obtained.

### Youness Lamzouri, “Sharp Omega Results for the Divisor and Circle Problems”

- **Source:** arXiv:2605.21476v1, dated 20 May 2026,
  <https://arxiv.org/pdf/2605.21476v1>; published version,
  *Proceedings of the London Mathematical Society* 133(4), DOI
  <https://doi.org/10.1112/plms.70230> (online publication 15 October 2026).
  Full arXiv source bundle:
  <https://export.arxiv.org/src/2605.21476v1>.
- **Local files:** `lamzouri-sharp-omega-divisor-circle-arxiv2605.21476v1.pdf`,
  `.txt`, and `lamzouri-sharp-omega-divisor-circle-arxiv2605.21476v1-source.tar.gz`.
- **SHA-256:** PDF
  `9df81a697f1d6485904630c07b37176637dab11197753122008d887eb56e9182`;
  text
  `0c8e16db8b2412731eec01a350cc00baf90edb136b27d716ac06a02287938106`;
  source archive
  `74d0d28ef066c65bc867dfb1ce6fd604bcdc5d2eba490beacd2a72b4cf58498f`.
- **Extent read:** complete article, §§1–3, full proof of Theorem 1.1,
  and references; source TeX checked for the exact exponent and formulas.
- **Results harvested:** using the paper's
  `Δ(x)=Σ_{n≤x}d(n)−x(log x+2γ−1)` and
  `P(x)=Σ_{n≤x}r(n)−πx`, Theorem 1.1 proves
  `Δ(x)=Ω⁺((x log x)^{1/4}(log₂ x)^{(3/4)(2^{4/3}−1)})` and
  `P(x)=Ω⁻((x log x)^{1/4}(log₂ x)^{(3/4)(2^{1/3}−1)})`.
  Section 2 proves the resonance theorem; §3 transfers it to the arithmetic
  errors via Voronoï and a Balasubramanian–Ramachandra/Selberg–Delange
  estimate. These are signed lower bounds on unbounded sequences, not
  pointwise upper bounds or a proof of the maximal-order conjecture.
- **Disposition:** include as a dated proved lower-bound theorem. Do not
  copy the introduction's statement that Huxley's `131/416` bound was the
  current upper bound: that wording conflicts with the later Li–Yang
  preprint already read here, and the subsequent Cen–Gao–Zhang–Zhang
  preprint below.

### R. Balasubramanian and K. Ramachandra, “On the number of integers n such that nd(n) ≤ x”

- **Source:** *Acta Arithmetica* 49 (1988), no. 4, 313–322,
  DOI <https://doi.org/10.4064/aa-49-4-313-322>; full publisher scan from
  <https://www.impan.pl/shop/publication/transaction/download/product/105616>.
- **Local files:** `balasubramanian-ramachandra-integer-ndn-leq-x-1988.pdf`,
  `.txt` (the source scan is image-only; the extracted text is empty), and
  rendered visual pages in `balasubramanian-ramachandra-1988-pages/`.
- **SHA-256:** PDF
  `66d6fa988aac46a78941c54d0775090bb42aa7dbb27a5d640685c01aa9597ae3`;
  empty text extraction
  `370f1aba313952ac0e2f9134167a431aa8ac180f1da8f008d0fc9bc843afe4e5`.
- **Extent read:** complete article, printed pp. 313–322, visually read from
  all six downloaded scan pages; the last scan page contains the end of this
  article and the start of the following article, which was not part of the
  R1 read.
- **Results harvested:** Theorem 1: for `λ>0` and positive multiplicative
  `g` with `g(p)=1/λ` for all primes and `g(n)≫n^{-1/16}`,
  `#{n≥1: n g(n)≤x}∼c x(log x)^{λ−1}` for a positive constant `c`.
  The article's contour proof is §§2–7 (zero-free/logarithm bounds, contour
  shift, local expansion at `s=1`, Hankel integrals and extraction of the
  main term), and §7's Theorem 4 finishes the asymptotic. In its proof,
  Lemma 1 supplies a zero-free region for ζ of width
  `100A(log |t|)^{-2/3}(log log |t|)^{-1/3}` and explicitly refers to
  Montgomery or Walfisz for that lemma's proof. Thus the article is a full
  proof of its theorem only conditional on that imported zero-free-region
  supplier; it does not prove the region locally.
- **Disposition:** source for the exact multiplicative coefficient-count
  input used in Lamzouri §3, with the Vinogradov–Korobov zero-free-region
  dependency named and proof-gated pending an independently full proof
  source. Do not cite this paper as a proof of its own Lemma 1.

### Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”

- **Source:** arXiv:2610.21730v1, submitted 15 October 2026,
  <https://arxiv.org/pdf/2610.21730v1>; full source bundle
  <https://export.arxiv.org/src/2610.21730v1>.
- **Local files:** `gauss-circle-new-bound-arxiv2610.21730.pdf`, `.txt`,
  `gauss-circle-new-bound-arxiv2610.21730-source.tar.gz`, and the retrieved
  arXiv abstract page `gauss-circle-new-bound-arxiv2610.21730-abs.html`.
- **SHA-256:** PDF
  `6736b7bf18dea08ac5060be511ef2e0f5ba53bb6bd0b5f033db0f3a6427c941b`;
  extracted text
  `c5f36d4e377b4cbe7145bc2bbea3e16c97e5441528d9d02c98be781b0e540e18`;
  source archive
  `c8defd1f7eaf69902095295c463ef92224aa4065cb078a19e67b553c139624b3`.
- **Extent read:** complete 34-page v1, §§1.1–1.7, §§2–6, Appendices A–B,
  and all references; the complete source archive was also retrieved and
  checked. The final pages include references and author information.
- **Source statements harvested:** §1.1 defines
  `E(X)=#{(a,b)∈Z²:a²+b²≤X}−πX`. Theorem 1.1 states
  `|E(X)|≲ε X^{209/670+ε}` for every `ε>0` and real `X≥4`.
  Conjecture 1.1 states `Oε(X^{1/4+ε})`; §1.2 tabulates historical bounds
  in the squared-radius normalization and explicitly lists the 2023
  Li–Yang result as a preprint. The proof is local across the article's
  reduction, explicit pair-count, second-spacing, cone-distribution, and
  double-large-sieve sections, with Appendices A–B supplying summation and
  large-sieve details. The proof imports, among other results, a
  Guth–Maldague cone estimate, Vinogradov mean-value theorem, Robert–Sargos
  spacing estimates, and Watt's second-spacing estimate; each remains a
  separately named proof prerequisite rather than an unverified citation.
  The authors disclose use of ChatGPT/Codex for strategy discussion, draft
  editing, checking, organization and clarity, and state they wrote/reviewed/
  verified the mathematics and accept responsibility for it.
- **Disposition and status boundary:** the complete v1 was read, and the
  dated theorem statement is recorded, but the local proof item stays gated
  on the named imported sources: Robert–Sargos's primary text is unavailable,
  while Watt Lemma 8.2 imports unread Huxley 1996 and Huxley–Watt 2000
  results. At the 2026-10-23 read date the artifact is arXiv v1, not a
  peer-reviewed publication record. The exponent is numerically below the
  Li–Yang `0.314483…` circle exponent. This source set does not establish an
  exhaustive “current best” claim. The paper supplies no new divisor-problem
  exponent.

### Source-status reconciliation for the discrepancy branch

- The existing published `thm-divisor-counting-summatory-estimate` proves
  the elementary `O(√x)` divisor remainder, and
  `cor-average-order-of-two-square-representations` proves the `O(√x)` circle
  remainder. These exact existing items are reused rather than duplicated.
- Miller–Schmid §6 gives the fully proved `Oε(X^{1/3+ε})` circle estimate
  from Poisson; its divisor Voronoï formula is displayed but the proof is
  referred to Huxley.
- Li–Yang v2 proves `θ*=0.3144831759741…` for both discrepancies and is a
  full 2023 preprint proof source. Cen–Gao–Zhang–Zhang v1 proves `209/670`
  for the circle error in its full October 2026 arXiv preprint.
- Lamzouri's October 2026 published theorem is a signed omega lower bound,
  not an upper-bound competitor. Its introduction's historical upper-bound
  sentence is not a valid status update after Li–Yang and is not used.
- At the 2026-10-23 research cutoff, this dossier reports only what these
  complete sources prove and their own publication statuses. It does not
  certify that the read-source set is the full frontier.

### R3 cross-track source audit for imported Li–Yang/Cen inputs

The exact second-reader audit is [`r3-sources/li-yang-cen-import-source-review.md`](../r3-sources/li-yang-cen-import-source-review.md), SHA-256
`f537f83c9b9a22e3c10b2d0e9f8ec6dda44a1519175ea647aa0830de2606ec5c`.
R3 read the Bourgain–Watt 1505.04161v1 §5 and §10 completely (not all 59
pages); Guth–Maldague §1/Theorem 2 context, §§2–3, the full proof §§5–9, and
Appendix §11.1 (not §§4, 10, or later appendices); BDG Theorem 1.1 and
proof/context §§1–4, 6–9 (not §5); and Watt's theorem-1 setup, §§2–4 and
complete §8 (not §§5–7). These source extents and hashes are recorded in
that note. Its dispositions are used directly in the item graph: the
Bourgain–Watt double-large-sieve theorem is a supplier to Li–Yang §4; the
Guth–Maldague amplitude-dependent cone theorem is distinct from BDG's
degree-five VMVT input; and the latter alone is used for Cen's small-range
moment estimate. Cen's source proof further imports the separately named
Robert–Sargos Theorem 2/Lemma 8 and Watt Lemma 8.2; R–S's full primary text
remains inaccessible, and Watt Lemma 8.1's cited Huxley 1996 and Huxley–Watt
2000 inputs remain proof gates. Huxley 2003's second-spacing result used by
Li–Yang also lacks a full primary-source read. The withdrawn BW17 v2 status
and all Li–Yang/Cen source locators are recorded in the same audit; no
withdrawn theorem is a logical supplier.
