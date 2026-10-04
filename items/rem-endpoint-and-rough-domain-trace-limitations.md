---
id: rem-endpoint-and-rough-domain-trace-limitations
kind: remark
title: "Endpoint and rough-domain limitations of the trace theorems"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-sharp-trace-theorem-for-w-one-p, thm-bounded-right-inverse-for-the-sobolev-trace, thm-kernel-of-the-trace-is-w-one-p-zero, def-bounded-c-k-domain-and-boundary-charts, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.II] and no. 4, printed pp. 290 and 300-305: for $p=1$ the traces are exactly the summable boundary functions, and the $p=1$ range is not described by the $p>1$ space."
    - title: "Petru Mironescu, Note on Gagliardo's theorem (fetch-verified Internet Archive capture of HAL hal-01131162v1), Annals of the University of Bucharest (Mathematical Series) 6 (LXIV) (2015), no. 1, 99-103"
      url: "https://web.archive.org/web/20240206144914id_/https://hal.science/hal-01131162/document"
      locator: "Abstract and Section 1, printed pp. 99-101: a complete proof that every $L^1$ function is the trace of a $W^{1,1}$ function on the half-space."
    - title: "Piotr Hajlasz and Olli Martio, Traces of Sobolev functions on fractal type sets and characterization of extension domains, Journal of Functional Analysis 143 (1997), 221-246"
      url: "https://sites.pitt.edu/~hajlasz/OriginalPublications/HajlaszM-Traces-JFunctAnal-143-1997-221-246.pdf"
      locator: "Remarks after Theorem 10, part (4), printed p. 243: for $p=1$ the trace is onto $L^1$ but there is no bounded linear extension $L^1\\to W^{1,1}$, after Peetre."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, printed p. 73: for $p=1$ the trace is onto $L^1$; for $1<p<\\infty$ the range is a Besov space."
    - title: "Carlos Zuppa, A compact trace theorem for domains with external cusps, Revista de la Union Matematica Argentina 50 (2009), no. 1"
      url: "https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0041-69322009000100003"
      locator: "Abstract and Section 1 (Condition A1, Theorems 2 and 4, Corollary 5): weighted estimates on external cusps and compactness under the stated below-threshold Condition A1."
---

## Scope of the trace theory of this page

Assume the Axiom of Choice. The positive results of this page are the bounded
trace operator $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ of
[[thm-lp-trace-operator-on-a-bounded-c-one-domain]], its sharp range
$W^{1-1/p,p}(\partial\Omega)$ for $1<p<\infty$ with the bounded right inverse
of [[thm-bounded-right-inverse-for-the-sobolev-trace]], and the kernel
identification of [[thm-kernel-of-the-trace-is-w-one-p-zero]]. Four
limitations belong to the statement of the theory.

(i) The sharp range statement is proved here for $1<p<\infty$. At $p=1$ the
trace operator $T:W^{1,1}(\Omega)\to L^1(\partial\Omega)$ is still bounded and
onto, but the range must not be renamed $W^{0,1}(\partial\Omega)$: that
notation describes no space constructed on this page. Moreover, at $p=1$
there is no bounded linear right inverse $L^1(\partial\Omega)\to
W^{1,1}(\Omega)$. The $p=1$ surjectivity of Gagliardo and the nonexistence of
a bounded linear extension are classical facts attributed below; they are
**not** proved on this page, and the constructions of
[[thm-bounded-right-inverse-for-the-sobolev-trace]] are used only in the
range $1<p<\infty$.

(ii) The trace theorems of this page use bounded $C^1$ domains with the local
one-sided graph property of [[def-bounded-c-k-domain-and-boundary-charts]].
Derivatives of the flattening maps and their inverses are bounded on compact
patches; shrinking the charts and taking a finite cover of the compact
boundary gives bounds depending on the chosen domain and cover. The
definition imposes no uniform constants across all charts or domains.
Individual $C^1$ boundary arcs do not suffice: at an outward-cusp tip the
local one-sided graph property fails. For the planar model
$\Omega_\alpha=\{(x,y):0<y<1,\ |x|<y^\alpha\}$, the companion page's
concentrating sequence disproves the unweighted $W^{1,p}$ to boundary $L^p$
trace bound when $\alpha>p$. Weighted trace results require their own
hypotheses; Zuppa supplies context for cusp models and weighted estimates,
without a claim here that weighting is necessary or that every cusp has the
same threshold.

(iii) Gagliardo's original hypotheses are Lipschitz, not $C^1$; the same
statements hold for bounded Lipschitz domains with a Lipschitz boundary atlas,
and the $C^1$ statements proved here are special cases. No Lipschitz-domain
strengthening beyond the finite-dimensional Euclidean domains treated on
this page is claimed, and no sharpness of the Lipschitz class is asserted.

(iv) The zero-boundary identification $\ker T=W_0^{1,p}(\Omega)$ is a
statement about the $W^{1,p}$-closure of $C_c^\infty(\Omega)$; no pointwise
boundary parametrisation of an arbitrary Sobolev class is claimed, and no
claim is made that a Sobolev class has boundary values at individual points.

## Attribution for the unproved endpoint facts

The $p=1$ surjectivity is Gagliardo's Teorema [1.II], as proved again by
Mironescu; the absence of a bounded linear right inverse at $p=1$ is Peetre's
theorem as quoted by Hajlasz and Martio; Hunter's Section 3.9 records both the
$p=1$ onto statement and the Besov description for $1<p<\infty$. The
outward-cusp limitation is documented by Zuppa and the weighted-space
literature he cites. None of these attributed facts is used as a proof
obligation elsewhere on this page.

## Source notes

Gagliardo, Teorema [1.II] and no. 4 (printed pp. 290 and 300-305), treats the
summable case; Mironescu (printed pp. 99-101) gives a complete proof that
every $L^1$ function on the boundary is a trace; Hajlasz and Martio (Remarks
after Theorem 10, part (4), printed p. 243) record the failure of a bounded linear right inverse at
$p=1$; Hunter (printed p. 73) states both endpoint descriptions; Zuppa's
Section 1 (Condition A1, Theorems 2 and 4) is the cusp source. This remark
records scope, not new mathematics.
