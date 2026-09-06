# Frontier-31 beta batch 5 - scaffold and source checkpoint

## Scope and plan reconciliation

The task/spec authorize the A page at order 288.1401, with sole page
prerequisite fejer-and-poisson-summability-of-fourier-series-examples, and
its B companion. The design gives no competing numerical order. It does,
however, describe FR-3 as requiring FR-1, FR-2, FA-18, and Parseval from the
Hilbert-series material. This is a design-versus-spec prerequisite conflict.
The manifest preserves the spec's requires arrays exactly; no adjudication was
made inside this batch.

The design also explicitly assigns the weak-derivative definition to PDE-11
as a forward interface. The manifest records that forward reference on
cor-one-ltwo-derivative-implies-absolute-convergence; it does not add a
nonexistent ordinary dependency.

## Conventions

All planned statements use T = R/Z, normalized Haar measure, Fourier
coefficient fhat(k) = integral over T of f(x)e_-k(x), and
e_k(x) = exp(2 pi i kx). Laugesen uses a differently normalized circle; the
source material is translated, not copied, into this project convention.
C-alpha(T) has 0 less than alpha less than or equal to 1 and the usual Holder
seminorm.

## Scaffolded claims and proof graph

The A page has nine items, well below the 60-item split threshold:

1. def-wiener-algebra-of-the-circle: A(T) and its ell-1 coefficient norm.
2. lem-absolutely-summable-fourier-coefficients-give-uniform-convergence:
   M-test and coefficient recovery.
3. thm-wiener-algebra-is-a-banach-algebra: ell-1 completeness, convolution,
   and the norm estimate.
4. lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz:
   a standalone weighted-sequence Cauchy-Schwarz lemma.
5. lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions:
   the necessary translation/orthogonality estimate for a Holder function.
6. thm-bernstein-absolute-convergence-theorem: dyadic Cauchy-Schwarz and a
   geometric series for alpha greater than 1/2.
7. cor-one-ltwo-derivative-implies-absolute-convergence: PDE-11 weak
   derivative identity and Parseval, then item 4.
8. rem-wiener-lemma-interface: identifies, without duplicating, the exact
   inverse-closedness theorem owned by FA-18.
9. cor-holomorphic-functional-calculus-in-the-wiener-algebra: applies the
   later FA functional-calculus theorem to the Banach algebra obtained in item
   3.

The B page has five dependency-leaf examples/counterexamples. The
absolute coefficient-square example uses Riemann-Lebesgue to rule out C2
regularity. The Holder-one-half endpoint counterexample preserves Grafakos's
qualification that its auxiliary exponential-sum estimate is stated but not
supplied.

Every manifest item has an explicit deps array. All ordinary dependency
targets were checked as either a same-batch item or an existing published
item. The forward PDE-11 reference is intentionally not put in deps, since
the planned item is not yet published and the manifest-only policy prohibits
such a dependency.

## Source harvest and support

Three independent full treatments were read and live-PDF verified on
2026-09-05; exact URLs, page/PDF locators, source headings, and individual
result dispositions are in research/frontier-31-batch-5.coverage.json.

- Laugesen, Chapter 4, printed pp. 27-30: definition, uniform synthesis,
  Banach-algebra structure, the alpha greater than 1/2 inclusion, and the
  exact Wiener lemma interface.
- Grafakos, section 3.3.3, printed pp. 200-204: Definition 3.3.15, Theorem
  3.3.16 and its dyadic proof, plus Exercises 3.3.1-3.3.8. This primary
  textbook treatment supplies both the sharp Holder route and endpoint
  source.
- Taylor, section 1, PDF pp. 2-8 through Proposition 1.3: Fourier
  conventions, Parseval/unitary framework, Poisson material assigned to FR-2,
  and an integer-smoothness comparison result.

## Known limits and authoring obligations

The one-L2-derivative corollary cannot become self-contained until the
PDE-11 weak-derivative identity and an established Parseval theorem are
available. The page must cite those actual items when they exist; it must not
silently treat the source as a substitute proof.

Likewise the holomorphic-functional-calculus corollary needs the exact FA
functional-calculus theorem. It is deliberately stated only for functions
holomorphic near the spectrum; no continuous-functional-calculus assertion is
planned. The Wiener lemma remains FA-18's theorem and is only an interface
remark here.

For the Holder endpoint counterexample, authoring must either establish the
displayed exponential-sum estimate from Grafakos Exercise 3.3.8 or expressly
retain it as a cited, qualified source-boundary statement in accordance with
the item contract. It must not imply that the exercise supplies that estimate.

## Validation checkpoint

JSON parsing, the coverage checklist with deferred destination enforcement,
the manifest-only content policy, the full plan validator, the source-fetch
receipt check, and the whitespace diff check pass. The terminal URL sweep
could not resolve any of the three source hosts and found no archive recovery;
the same URLs were nevertheless directly opened as complete live PDFs through
the source reader before harvesting, and each source has that receipt. This is
an environment DNS-liveness failure, not a claim that unread source text was
used. No workflow state or published content was changed.
