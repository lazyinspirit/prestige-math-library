# Noncompact Hecke–Maass entropy source review

Date: 2026-10-23. Prepared as an R3-owned source supplement for the R4
Hecke–Maass QUE chain. It records the primary source, the author’s warning,
the exact noncompact proof dependency, the identified gap in the 2003
argument, and the 2004 primary correction. It maps the correction and its
remaining elementary supplier contracts rather than transcribing a new
library proof.

## Primary source and actual reading

Jean Bourgain and Elon Lindenstrauss, “Entropy of Quantum Limits,”
*Communications in Mathematical Physics* 233 (2003), 153–171,
DOI <https://doi.org/10.1007/s00220-002-0770-8>. The complete 21-page
author manuscript is staged at
research/number-theory-scaffolds-2026-10-23/analytic/r4-sources/bourgain-lindenstrauss-entropy-of-quantum-limits-2003.pdf
and .txt. The R4 source index records SHA-256
df0081f686f54d3ee5e9335d7f165d84e0ce33853016ece3a5ff26e1dfd18f1b
for the PDF and
4bd2ffc966a011f63d733176420637ebcdafc5c20a07cff0ca6cad3a01833e5f
for the text. For this focused audit I read the full proof of §4 and its
immediate context, the compact construction in §3, the use of the resulting
plaque estimate in Theorem 2.3, and the sieve inputs in §5:

- §1 and Theorems 2.1–2.3, printed pp. 1–5: definition of arithmetic quantum
  limits, the local plaque-mass target, the entropy consequence, and the
  reduction to a Hecke-eigenfunction mass bound.
- §3, printed pp. 6–12: Lemma 3.3, Theorems 3.4–3.5, the sieve construction,
  Lemma 3.6 and Corollary 3.7 (the pointwise Hecke-tree mass-transfer
  inequality).
- §4, printed pp. 13–15: the noncompact replacement Lemma 4.1 and Theorem
  4.2, read in full. This is the flagged source section.
- §5, printed pp. 15–20: Theorems 5.1–5.3, Corollary 5.4, and the sieve and
  Burgess-sum arguments that establish Theorem 3.4. The extract is local;
  the cited Burgess estimate and Brun sieve still need their own local
  suppliers in the library.

## Author warning: exact locator and what was retrieved

The author’s live directory page is
<https://www.math.princeton.edu/~elonl/Publications/>. A byte-for-byte
snapshot retrieved on 2026-10-23 is
lindenstrauss-publications-directory-2026-10-23.html in this directory,
SHA-256
72d051af9511e93c3cc0744e0702fc78c1136d146e312439b88bc868585757b4.
At lines 71–74, under the BL03 entry, it says:

> Please note: there is a fixable inaccuracy in section 4 (treatment of the
> noncompact case). An erratum will be posted soon. Thanks to A. Venkatesh and
> L. Silberman for pointing this out.

The “Corrections” links immediately above that entry are attached to
Lindenstrauss’s different 2001 paper, *On quantum unique ergodicity for
\(\Gamma\backslash\mathbb H\times\mathbb H\)*. They are not an erratum to
BL03. The directory has links to the BL03 PS/DVI/PDF manuscript but no BL03
erratum link or correction text. The HTML index.html bibliography is a
different page and does not include the warning; use the directory URL above
as the evidence for the author note.

The exact primary correction was located:
Jean Bourgain and Elon Lindenstrauss, “Corrections and Additions to ‘Entropy
of Quantum Limits’,” dated 2004-10-26,
<https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf>.
The complete six-page PDF and text extraction are staged in this directory
as bourgain-lindenstrauss-entropy-quantum-limits-corrections-2004.pdf/.txt,
SHA-256
2784e5b7697b69549e3c439ba75aee38e081d48123e9b2d1f291f6e49543c04e
for the PDF and
c2eb3fc180f46b0635cefd01efe9816493fad018b83c445223f105144c013e97
for the text. The authors explicitly identify the omitted case: in \(M_2(\mathbb
Q)\), \(\mathbb Q(\alpha)\) can be \(\mathbb Q\oplus\mathbb Q\), not a
quadratic field. Their Theorem 2 and §2 give a corrected argument sufficient
for the noncompact entropy input. I read the complete six-page correction;
the proof map follows.

## Exact noncompact contract and proof chain

In §4, the lattice is \(\Lambda=\mathrm{SL}_2(\mathbb Z)\),
\(X=\Lambda\backslash\mathrm{SL}_2(\mathbb R)\),
\(R'=M_2(\mathbb Z)\cap\mathrm{GL}_2(\mathbb R)\), and \(R'(m)\)
consists of primitive integral matrices with determinant \(m\). The fixed
plaque is
\[
B(\epsilon,\tau_0)=a((-\tau_0,\tau_0))u^-((-\epsilon,\epsilon))
u^+((-\epsilon,\epsilon)),\qquad \tau_0=1/50.
\]
Theorem 4.2, printed p. 14, states that for a compact
\(\Omega\subset X\), arbitrary prime set \(P\), \(x\in\Omega\), and
\(\epsilon>0\), a set \(W\) of cube-free integers can be found so that:

1. each \(n\in W\) has a uniformly bounded number of prime factors;
2. \(p^2\mid n\) iff \(p\mid n\) and \(p\in P\);
3. the plaques \(yB(\epsilon,\tau_0)\), for \(y\in T_n(x)\) and \(n\in W\),
   are pairwise disjoint;
4. \(|W|\gg_\Omega\epsilon^{-\kappa'/4}\), with
   \(\kappa'=2/9\).

Its intended proof chain is:

1. Theorem 4.2 selects the earliest overlap of two Hecke plaques, with
   indices \(n_1\le n_2\). A primitive matrix \(\alpha\in R'(M)\),
   \(M\mid n_1n_2\), satisfies \(x\in\underline\alpha x
   B(4\epsilon,3\tau_0)\).
2. For \(\alpha,\beta\in R'\), Lemma 4.1 replaces compact-case Lemma 3.3:
   if both normalized matrices \(\underline\alpha,\underline\beta\)
   return \(x\) into \(xB(\epsilon,\tau_0)\), and
   \((n(\alpha)n(\beta))^{-1}\gg_{\Omega,\tau_0}\epsilon^2\), then
   \(\alpha\) and \(\beta\) commute. The proof controls the normalized
   commutator \([\underline\alpha,\underline\beta]_+\) in a neighborhood
   of \(0\) of radius \(O_\Omega(\epsilon)\), while it lies in
   \((n(\alpha)n(\beta))^{-1/2}M_2(\mathbb Z)\); the determinant
   condition makes the lattice spacing larger than this neighborhood.
3. The proof asserts that \(\alpha\) is real-semisimple, then immediately
   identifies \(\mathbb Q(\alpha)\) with a real quadratic **field**
   \(L=\mathbb Q(\sqrt D)\), where
   \(D=\operatorname{tr}(\alpha)^2-4n(\alpha)\).
4. It applies §5 Theorem 3.4 to choose square-free integers whose prime
   factors satisfy \(\left(\frac Dp\right)=-1\). Theorem 3.4 itself follows
   from §5 Theorem 5.1 (a lower bound for \(\sum 1/p\) over quadratic
   nonresidue primes), Brun’s sieve Theorem 5.2, and the Burgess character
   sum estimate Theorem 5.3/Corollary 5.4.
5. A norm/unit argument and the plaque-overlap assumptions yield the
   pairwise-disjoint family. Corollary 3.7 transfers the pointwise
   Hecke-eigenfunction mass to the union of those plaques. Summing over
   \(W\) gives a local mass bound.

This chain is enough to state exactly what supplier is missing: a treatment
of the split-semisimple case in step 3, or another argument that rules it out
under the first-collision hypotheses. The source has no such step in §4.

## The split-algebra gap in BL03 and its correction

For a noncompact lattice, \(R'=M_2(\mathbb Z)\). A primitive,
non-scalar, real-semisimple matrix need not generate a quadratic field; its
characteristic polynomial can split over \(\mathbb Q\). For example, for
coprime positive integers \(u,v\), set
\[
A_{u,v}=
\begin{pmatrix}
u^2 & v^2-u^2\\
0   & v^2
\end{pmatrix}.
\]
The entries have gcd \(1\), \(\det A_{u,v}=(uv)^2\), and its distinct
eigenvalues are \(u^2,v^2\). Thus it is primitive and real-semisimple but
\[
\mathbb Q[A_{u,v}]\simeq
\mathbb Q[t]/((t-u^2)(t-v^2))\simeq\mathbb Q\times\mathbb Q,
\]
not a number field. Its discriminant is the square
\((u^2-v^2)^2\). For \(u=v+1\), the normalized matrix
\(\underline A_{u,v}\) is conjugate to
\(a(\log((v+1)/v))\), whose flow parameter tends to zero. With
\(P=\begin{pmatrix}1&1\\0&1\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)\),
\(A_{u,v}=P\operatorname{diag}(u^2,v^2)P^{-1}\); at
\(x=\Lambda P=\Lambda\), the corresponding Hecke point is
\(\Lambda a(\log((v+1)/v))\). Thus the printed proximity and
real-semisimplicity conditions alone do not force the field case.

When \(D\) is a square, \(\left(\frac Dp\right)\) is \(1\) for primes
\(p\nmid D\) and \(0\) for \(p\mid D\). Hence the nonresidue-prime set used
in §5 Theorem 3.4 is empty. BL03’s next sentence, “Thus again
\(\mathbb Q(\alpha)\) is isomorphic to some real quadratic number field,”
does not follow from the stated hypotheses. This is precisely the gap that
the 2004 correction identifies on p. 2.

The correction replaces the false field inference with an alternative
escape-of-mass argument. Its Theorem 2 (§1, printed pp. 2–3) states that for
an arithmetic quantum limit \(\mu\) on a nonuniform congruence quotient,
each compact \(\Omega\subset X\), \(x\in\Omega\), and sufficiently small
\(\epsilon\), either
\[
\mu(xB(\epsilon,\tau_0))\ll_\Omega\epsilon^{\kappa'},
\qquad \kappa'=2/9,
\]
or the geodesic-flow maximal function satisfies
\[
M(1_{\Omega^c},x)>0.199,\qquad
M(f,x)=\sup_{T>0}\frac1T\int_0^T f(xa(t))\,dt.
\]
This alternative is enough: for \(\mu(\Omega^c)<\delta\), the maximal
inequality gives an exceptional set of measure at most \(5.1\delta\),
uniformly in \(\epsilon\). Taking a sequence of compacts with
\(\delta\to0\) yields, for \(\mu\)-almost every \(x\), lower local dimension
at least \(2/9\), and hence entropy at least \(2/9\) for every
\(a(t)\)-ergodic component. The theorem permits finite nonprobability
quantum limits; if \(\mu=0\), there is no nonzero component to check.

The corrected split-case mechanism is §2, printed pp. 4–6. If the plaque
bound fails, the preceding BL03 argument supplies a primitive
\(\alpha\in M_2(\mathbb Z)\) with positive determinant
\(N\ll_\Omega\epsilon^{-4\kappa'}\), two distinct integer eigenvalues
\(v_1,v_2\), and normalized matrix
\(\underline\alpha=\alpha/\sqrt N\) satisfying
\[
\underline\alpha x\in xB(4\epsilon,3\tau_0).
\]
The correction does not require \(\mathbb Q(\alpha)\) to be a field.
Lemma 3 gives short integral row eigenvectors for \(\alpha\); Lemma 4
controls products of small plaques; Lemma 5 converts the trace of an
element in \(B(\epsilon,\tau)\) into proximity to \(a(t_0)\) or
\(a(-t_0)\). The correction’s Lemma 5 has a factor-two typo in its
displayed hypothesis: it should read
\(\operatorname{tr}(g)=2\cosh t_0\). Its proof computes
\(\operatorname{tr}(a(t)u^-(s_-)u^+(s_+))
=e^t(1+s_-s_+)+e^{-t}=2\cosh t+O_\tau(\epsilon^2)\), and its later
application has \(2t_0=\pm\log(v_1/v_2)\); these confirm the corrected
normalization. With this one-line repair, the lemma follows from the
displayed trace computation. From these, the corrected proof shows a long
interval of the
orbit \(xa(t)\) exits \(\Omega\). It compares the eigenvector norm after
applying \(\alpha^m\) with the compact-set lower bound
\(\|zx'\|>c_\Omega\) for nonzero \(z\in\mathbb Z^2\) and
\(x'\in\widetilde\Omega\), the latter from Mahler’s criterion.

Our family \(A_{u,v}\) is therefore not a counterexample to the corrected
result. It is the split case the erratum handles: it has two distinct
integer eigenvalues and integral eigenvectors, so it satisfies the
alternative’s (A-2) and falls under the orbit-escape argument. For
\(x=\Lambda P=\Lambda\), its diagonal orbit heads toward the cusp; the
corrected maximal-function alternative detects exactly that escape.
The erratum’s footnote 6 notes that if the plaque bound fails, one can
choose the eigenvalues to be \(p\) or \(p^2\), and \(q\) or \(q^2\), for
distinct primes \(p,q\le\epsilon^{-\kappa'}\); this improves the maximal
lower bound from \(0.199\) to \(3/7-\delta\), but that refinement is not
needed here.

The correction also fixes the exponent typo in BL03: p. 3, last paragraph,
states that Theorem 3.5 part (4) should read
\(|W|\gg\epsilon^{-\kappa'}\), and p. 3’s proof supplies the corresponding
signs in the count. The original printed \(\epsilon^{-\kappa'/4}\) was not
the intended bound.

## Consequence for the Lindenstrauss–Soundararajan chain

Lindenstrauss, *Invariant Measures and Arithmetic Quantum Unique
Ergodicity*, *Annals of Mathematics* 163 (2006), 165–219, full source at
research/number-theory-scaffolds-2026-10-23/analytic/r4-sources/lindenstrauss-invariant-measures-arithmetic-que-2006-annals.pdf
and .txt (PDF SHA-256
b2e5d73cd182fb01bd2419a6f991f1a485cb4a057c900167e0b5f1a86f452bd4),
Theorem 1.1 requires positive entropy for every \(A\)-ergodic component
along with the recurrence hypotheses; it does not need the specific
constant \(2/9\). Theorem 1.4 for noncompact congruence surfaces gives
the limit \(c\cdot\mathrm{Haar}\), \(0\le c\le1\), once that positive-entropy
input is valid.

Soundararajan, *Quantum Unique Ergodicity for the Full Modular Surface*,
arXiv:0901.4060v1, full 10-page paper at
research/number-theory-scaffolds-2026-10-23/analytic/r4-sources/soundararajan-quantum-unique-ergodicity-sl2z-2009-arxiv0901.4060v1.pdf
and .txt (PDF SHA-256
8d05b5230d6a7ba9627e65a5e935a9f297f616a030906156e83ec705f3aa2e14),
§1 Theorem 1 and §2 explicitly combine Lindenstrauss’s
\(c\cdot\mathrm{Haar}\) conclusion with a no-escape-of-mass estimate to
obtain \(c=1\). Thus any rigorously repaired positive noncompact entropy
bound would suffice for this QUE chain, but the reference to the unclosed
BL03 §4 argument is not itself such a repair.

## Review disposition

- **Closed for the QUE input:** the full primary correction is local and
  read. The split \(M_2(\mathbb Q)\) case is explicitly addressed by the
  corrected Theorem 2 alternative, which yields entropy \(2/9\) for almost
  every point and every \(a(t)\)-ergodic component. This is the source to
  use for the noncompact QUE branch, not BL03 §4 alone.
- **Boundary:** the correction’s weaker Theorem 2 is sufficient for
  Lindenstrauss–Soundararajan QUE, but it is not the pointwise uniform
  plaque-mass theorem claimed in BL03 Theorem 2.1. Do not advertise the
  latter as corrected for noncompact quotients.
- **Exact source repair:** the only correction-text normalization used
  here is the factor \(2\) in Lemma 5’s trace hypothesis, forced by its own
  displayed trace computation and by its application to (A-2).
- **Separate local proof obligations:** the maximal inequality for
  \(a(t)\)-invariant finite measures, Mahler compactness lower bound, and
  the entropy/local-dimension implication must be supplied locally if the
  scaffold authors these statements. The correction names and proves the
  elementary lemmas 3–5; it still invokes Mahler’s criterion and the
  standard maximal inequality.
