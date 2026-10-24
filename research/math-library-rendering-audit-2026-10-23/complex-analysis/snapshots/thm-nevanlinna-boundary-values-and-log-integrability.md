---
id: thm-nevanlinna-boundary-values-and-log-integrability
kind: theorem
title: "Boundary values and log-integrability of Nevanlinna-class functions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-heine-borel-rn, cor-complex-differentiability-implies-continuity, def-countable-choice, def-nevanlinna-class-on-the-disc, thm-nevanlinna-class-is-bounded-quotient-class, lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice, thm-zero-order-factorization-holomorphic-function, thm-identity-theorem-holomorphic-functions, thm-isolated-zeros-holomorphic-function, thm-jensen-formula-on-a-disc, thm-fatou-lemma, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "2e1854e0fe9498ddbf87a185d3d34e5ddcb1701f3f34c74554a4690df2d782a4"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 67-69: every $f\\in N$ has finite nontangential boundary values a.e. and $\\log|f^*|\\in L^1$, via $\\log|g|$ as the difference of two nonnegative harmonic functions and (5.4)."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna class and its boundary behaviour, printed pp. 64-69: boundary values of $N$-functions and the integrability of $\\log|f^*|$."
---

## Statement

Assume countable choice, as in the defining Nevanlinna and circle conventions. Let $f\in N(\mathbb D)$ with $f\not\equiv0$. Then $f$ has finite nontangential
limits $f^*(\zeta)$ for $m$-almost every $\zeta\in\mathbb T$, and
$\log|f^*|\in L^1(\mathbb T,m)$; in particular $f^*\ne0$ $m$-almost
everywhere.

## Facts & Assumptions

**Given:** Countable choice and a nonzero $f\in N(\mathbb D)$.

[F1] A Nevanlinna function is a quotient $f=g/h$ with bounded holomorphic $g,h$, $h$ zero-free, and both bounded by one. This construction uses a harmonic conjugate of a majorant and its exponential, without Herglotz representation. ([[thm-nevanlinna-class-is-bounded-quotient-class]], [[def-nevanlinna-class-on-the-disc]])

[F2] Under countable choice a bounded holomorphic disc function has finite nontangential limits almost everywhere. The same full-measure set works for all cone apertures. ([[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]], [[def-countable-choice]])

[F3] A nonzero holomorphic function has a finite order at zero, factors there as $z^m q_0$ with $q_0(0)\ne0$, and has isolated zeros. Holomorphic functions are continuous, and closed bounded annuli in the plane are compact. Jensen's formula on a smaller disc with no boundary zeros gives $\int\log|q_0(r\zeta)|\,dm\ge\log|q_0(0)|$. Haar measure is normalized to mass one. ([[thm-zero-order-factorization-holomorphic-function]], [[thm-identity-theorem-holomorphic-functions]], [[thm-isolated-zeros-holomorphic-function]], [[thm-heine-borel-rn]], [[cor-complex-differentiability-implies-continuity]], [[thm-jensen-formula-on-a-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F4] For nonnegative measurable functions, the integral of the pointwise limit inferior is at most the limit inferior of the integrals. ([[thm-fatou-lemma]])

## Proof

1.1 Apply [F1] to write $f=g/h$ with $|g|,|h|\le1$ and $h$ zero-free. Both $g$ and $h$ are nonzero functions, since $f\not\equiv0$. By [F2] they have finite nontangential limits $g^*,h^*$ almost everywhere. We must prove $h^*\ne0$ and the integrability of both boundary logarithms before dividing. [F1, F2, given, construct]

1.2 Let $q$ be any bounded nonzero holomorphic disc function, with bound $M>0$. By [F3], its origin order $m$ is finite; the quotient $q_0=q/z^m$ off zero extends holomorphically to the disc with $q_0(0)\ne0$. Its zeros on each closed annulus compactly inside the disc are finite: all open neighborhoods containing at most one zero cover the annulus, by continuity at nonzeros and isolatedness at zeros. Compactness in [F3] gives a finite subcover, bounding the number of zeros by its finite size. For every $j\ge2$, choose $r_j\in(1-1/j,1-1/(j+1))$ whose circle contains no zero; only finitely many radii in this interval are forbidden. Countable choice supplies this sequence. Jensen applied to $q_0$ gives $$\int\log|q(r_j\zeta)|\,dm=m\log r_j+\int\log|q_0(r_j\zeta)|\,dm\ge m\log(1/2)+\log|q_0(0)|=:c> -\infty.$$ Meanwhile $\log^+|q(r_j\zeta)|\le\log^+ M=:C$. Consequently $$\int\log^-|q(r_j\zeta)|\,dm\le C-c.$$ The nontangential limits $q^*$ of [F2] include radial limits; Fatou [F4] applied to the negative parts, with value $+\infty$ at a zero boundary limit, gives $\int\log^-|q^*|\,dm\le C-c<\infty$. The positive part is bounded by $C$. Thus $\log|q^*|\in L^1$ and $q^*\ne0$ almost everywhere. This also covers $m=0$, a zero-free q and a nonzero constant. [F2, F3, F4, given, construct, algebra]

2.1 Apply step 1.2 separately to $g$ and $h$. On the common full-measure set where their finite nonzero boundary limits exist, the quotient has finite nontangential limit $f^*=g^*/h^*$. It is nonzero there, and $$\log|f^*|=\log|g^*|-\log|h^*|\in L^1,$$ by the triangle inequality for the two integrable logarithms. This identifies the complex limit directly, without inferring it from a modulus limit. [step 1.1, step 1.2, algebra]

3.1 Step 2.1 proves the entire assertion. Only countable choice has been used: in the bounded-holomorphic boundary supplier [F2] and the sequence of good Jensen radii in step 1.2. No general positive-harmonic measure representation or full-AC decomposition is needed. The excluded zero function nevertheless has the obvious zero boundary function, a convention used by the class definitions without assigning it an integrable logarithm. [step 1.1, step 1.2, step 2.1, algebra] ∎
