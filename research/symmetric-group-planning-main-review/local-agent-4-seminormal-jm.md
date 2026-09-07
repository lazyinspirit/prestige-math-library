# Local agent 4 — seminormal/Jucys--Murphy and cellular-JM audit

Scope: read-only audit for /root/symmetric_scaffold, 2026-09-07. This reviews SYMR-5, SYMR-9, and adjacent q-Schur/Jantzen JM use. No canonical plan or item was edited.

## Verdict

SYMR-5 has the right architecture, but its displayed seminormal formula is a left-action formula while its row calls it a right-action phasing. Repair it before authoring. Its primitive-idempotent row also needs the actual interpolation product.

SYMR-9 needs its promised exact T_i formula. Ordinary X_i-projectors are not proof suppliers for q-projectors: add the Type-A q-separation/projector joint. The q-Schaper row moves beta numbers, not parts of lambda, and imports a q-Schur Gram-determinant calculation that no dependency supplies. It is proof-blocked until that route is scaffolded.

Mathas--Soriano Proposition 4.13 cannot prove centrality of symmetric q-Schur JM polynomials: the source expressly says the q-Schur algebras in §2.17 fail its invariant-content-multiset hypothesis.

## SYMR-5: exact formulas, actions and hypotheses

Define first over Z[S_n]:
\[
X_1=0,\qquad X_k=\sum_{j<k}(j\ k).
\]
The local relations and pairwise commutativity survive base change. The Gelfand--Tsetlin algebra, one-dimensional joint eigenspaces and seminormal construction in the proposed route are over C (or, for the unnormalised OV matrices, Q); none is a modular simultaneous-diagonalisation assertion.

The GZ proof needs the real proof chain:
inverse-conjugacy in S_(n-1) -> commutative relative centralizer -> simple branching -> centers plus X_n -> GZ generation. The first integral definition must not depend on the later characteristic-zero spectrum.

The center statement must mean
\[
\operatorname{im}\bigl(\mathbb C[z_1,\ldots,z_n]^{S_n}
 \longrightarrow\mathbb C[S_n],\ z_i\mapsto X_i\bigr)
=Z(\mathbb C[S_n]),
\]
not an injective polynomial-algebra identification. Its reverse inclusion needs both the content-multiset-determines-shape lemma and finite symmetric interpolation on distinct shape spectra. The exact elementary formula is
\[
e_s(X_2,\ldots,X_n)=\sum_{\ell(\rho)=n-s}C_\rho.
\]

### Projectors and characteristic-two boundary

The primitive-idempotent row must print its recursion. If mu is the shape after deleting the n-node of T, then
\[
P_T=P_{T\downarrow[n-1]}
 \prod_{c\in A(\mu)\setminus\{c_T(n)\}}
 \frac{X_n-c}{c_T(n)-c},\qquad P_{[1]}=1,
\]
where A(mu) is the set of contents of addable nodes. Addable-node contents are distinct integers. The formula is valid over C, more generally where its displayed differences are units; it is not integral and does not furnish the generalized-primary idempotents required for SYMR-8.

The characteristic-two B row is sound after saying precisely what collides. The two (2,1) tableaux have vectors (0,1,-1), (0,-1,1), equal modulo 2. Already at the size-two branching from shape (1), addable contents 1,-1 differ by 2=0, so the recursive Lagrange denominator vanishes. This does not say the Specht module fails to exist; F_2[S_3] is nonsemisimple. It is not a construction of modular residue idempotents.

### Seminormal signs and left/right repair

OV §6, (6.3)--(6.4) is a left action. Let T'=s_iT, ell(T')>ell(T), and r=c_T(i+1)-c_T(i). Its exact formula is
\[
s_iv_T=r^{-1}v_T+v_{T'},\qquad
s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}.
\]
This is exactly the formula currently called right-action triangular phasing. Either change SYMR-5 to left modules or, for right modules, transpose the non-symmetric block:
\[
v_Ts_i=r^{-1}v_T+(1-r^{-2})v_{T'},\qquad
v_{T'}s_i=v_T-r^{-1}v_{T'}.
\]
The companion coefficient is forced by s_i^2=1. Garsia's apparently different coefficient has a different axial-distance orientation and matrix-unit placement; it cannot justify mixing displays.

For r=1 (same row) and r=-1 (same column) the scalar is +1,-1; otherwise T' is standard and |r|>=2. After real normalization, in the same ordered pair, the left-action block is
\[
\begin{pmatrix}r^{-1}&\sqrt{1-r^{-2}}\\
\sqrt{1-r^{-2}}&-r^{-1}\end{pmatrix}.
\]
This needs R, a positive square-root convention and an invariant positive form. An arbitrary characteristic-zero field need not contain that square root. OV's unnormalised seminormal representation is rational.

## SYMR-9: q normalization, projectors and generator blocks

With (T_i-q)(T_i+1)=0, Mathas--Soriano §2.15 uses
\[
L_1=0,\qquad L_k=\sum_{j<k}q^{j-k}T_{(k,j)},\qquad
[a]_q=1+q+\cdots+q^{a-1}\ (a\ge0),\quad [-a]_q=-q^{-a}[a]_q.
\]
The triangular diagonal is [c-r]_q, and q=1 yields X_k. A q-content is a field element; a residue is c-r modulo e. Do not conflate them.

For a field and q nonzero, e is the least positive integer with [e]_q=0, or infinity. Thus it is the positive characteristic when q=1, and otherwise the multiplicative order of q, when finite. The cited separated result assumes e>n, infinity allowed.

For a field and e>n, Mathas Lemma 3.32 separates standard residue sequences and Proposition 3.33 gives
\[
F_t=\prod_{k=1}^n
 \prod_{\substack{s\in\operatorname{Std}(\lambda)\\
 [\operatorname{res}_s(k)]_q\ne[\operatorname{res}_t(k)]_q}}
\frac{L_k-[\operatorname{res}_s(k)]_q}
{[\operatorname{res}_t(k)]_q-[\operatorname{res}_s(k)]_q},
\qquad f_t=m_tF_t.
\]
The scaffold must depend on this q-projector/separation proof joint, not on the ordinary P_T theorem. The resulting basis is orthogonal for the cellular form and the algebra is split semisimple; orthogonal is not positive/unit over an arbitrary field.

The current theorem promises but does not state the actual T_i block. In Mathas Theorem 3.34, for the right convention, put t=s(i,i+1) and rho=res_s(i)-res_s(i+1). Then
\[
f_sT_i=\begin{cases}
qf_s,& i,i+1\text{ in one row of }s,\\
-f_s,& i,i+1\text{ in one column of }s,\\
-[\rho]_q^{-1}f_s+f_t,
  &t\in\operatorname{Std}(\lambda),\ s\triangleright t,\\
q^\rho[\rho]_q^{-1}f_s+
 \dfrac{[\rho+1]_q[\rho-1]_q}{[\rho]_q^2}f_t,
  &t\in\operatorname{Std}(\lambda),\ t\triangleright s.
\end{cases}
\]
This must replace any informal q-analogue of the ordinary s_i block.

There is another side-convention defect. The q-Schur rows announce right modules but define the Schur functor as F(X)=eX. For a right S-module it is F(X)=Xe, a right eSe-module; eX is the left-module version. Fix this through cellular modules, Weyls, Spechts, dual/conjugate translation and q-Schaper.

## q-Schur, cellular and Jantzen dependencies

The q-Schaper formula currently moves parts of lambda; Mathas Theorem 5.31 moves beta numbers. For beta=(beta_1,...,beta_d) of lambda, the target label is
\[
(\beta_1,\ldots,\beta_b+h^\lambda_{ab},\ldots,
 \beta_c-h^\lambda_{ac},\ldots,\beta_d),
\]
not the same display with lambda entries. The existing sorting-sign/repeated-beta rule then applies to this beta sequence. Correct this before the example is authored.

The listed PID/prime/residue/fraction hypotheses are necessary: finite free lifted module with associative symmetric form nondegenerate over Frac(R), prime pi, F=R/pi R, lift hat q, and [n]!_(hat q) nonzero. Smith normal form supplies the valuation-of-Gram-determinant lemma. It does not prove q-Schaper by itself.

Mathas's Theorem 5.31 additionally uses the preceding q-Schur Weyl Gram determinant (Theorem 5.27), beta/rim-hook conversion, and the semistandard unitriangular dimension comparison (Lemma 5.30). Those are absent as dependencies. “Orthogonalize and rewrite the Gram determinant” is citation-only closure: scaffold those proof atoms or mark q-Schaper and dependent block rows proof-blocked.

Do not add a false q-Schur symmetric-JM-centrality supplier. Mathas--Soriano §2.17 gives q-Schur triangular JM actions, but immediately after Proposition 4.13 says those q-Schur algebras do not satisfy its centrality hypothesis. Cyclotomic generalized-eigenspace/block-idempotent construction belongs to SYMR-11, not ordinary interpolation.

## Full-text validation

| source | retrieval/completeness | inspected theorem locators |
|---|---|---|
| Adriano Garsia, *Young Seminormal Representation, Murphy Elements and Content Evaluations* (UCSD notes, 2003) | [author PDF](https://mathweb.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf) redirects from www.math.ucsd.edu; normal TLS validation failed in this environment, while a transport-bypassed check returned 200, 374025 bytes. SHA-256 5942dfd8e4b03118511e66d41a84cb8b740b42db5d2ccda67a707b8af1d0d20b; MuPDF 53 pages; terminal printed p. 53 is references. | §3, Thms. 3.1--3.5, pp. 18--24; §4, Thms. 4.2--4.4, pp. 25--32; §5, Thms. 5.1--5.2 and 5.10, pp. 33--36, 51--52. |
| A. M. Vershik and A. Yu. Okounkov, *A New Approach to the Representation Theory of the Symmetric Groups. II*, arXiv:math/0503040v3 | [arXiv PDF](https://arxiv.org/pdf/math/0503040), HTTP 200. SHA-256 bf19d2e52303f20fd66004f6ca2f3b62b9dd46500b7a62410e2c8e7ba2fbc9ac; 31 pages; terminal pp. 30--31 are acknowledgement/references. Retain II. | Prop. 1.1, pp. 7--8; Thms. 2.1, 2.5, 2.8--2.9/Cor. 2.6, pp. 8--13; Prop. 5.3/Thm. 5.8, pp. 18--22; §6 (6.3)--(6.5), Props. 6.1--6.2, pp. 22--23. |
| Andrew Mathas, *Seminormal Forms and Gram Determinants for Cellular Algebras*, arXiv:math/0604108v4 | [arXiv PDF](https://arxiv.org/pdf/math/0604108), HTTP 200. SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1; 29 pages. Main article pp. 1--22 is Andrew Mathas alone; separately titled Soriano appendix pp. 23--29 ends in references. | §2.15--2.17, pp. 6--8; §3.1--3.7, pp. 9--11; Thm. 3.16/Cor. 3.17, pp. 16--18; Cor. 4.7, Cor. 4.12, Prop. 4.13, pp. 18--21. |
| Arun Ram, *Seminormal Representations of Weyl Groups and Iwahori--Hecke Algebras*, arXiv:math/9511223 | [arXiv PDF](https://arxiv.org/pdf/math/9511223), HTTP 200. SHA-256 e3cb4705374083945667d99506760107821bda726b6023369674df643cbfb728; 51 pages; terminal pages finish bibliography. | Intro and §1, pp. 1--10, checked only for broad split-semisimple/seminormal context; no garbled later formula is used as Type-A proof evidence. |
| Andrew Mathas, *Iwahori--Hecke Algebras and Schur Algebras of the Symmetric Group* (1999 lecture notes) | SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0; 79 PDF pages, printed pp. 1--73 plus upload endmatter. Complete notes, not the 228-page AMS book; [AMS record](https://bookstore.ams.org/ulect-15/) is bibliographic only. | Def. 3.28/Thm. 3.30, pp. 28--29; Lemma 3.32, Prop. 3.33, Thm. 3.34, pp. 29--30; Lemmas 5.29--5.30, Thm. 5.31/Cor. 5.32, pp. 56--59; Lemmas 5.34--5.35, Thm. 5.36/Cor. 5.37, pp. 61--62. |

## Required handoff repairs

1. Use one action side in SYMR-5; transpose the displayed formula if it remains a right-module page.
2. Add exact ordinary and q interpolation products and a q-separation/projector dependency.
3. Print the Type-A T_i formula and correct the right Schur functor to Xe.
4. Replace the q-Schaper lambda-part formula by beta numbers; scaffold Theorem 5.27/Lemma 5.30 imports or mark the chain proof-blocked.
5. Keep q-Schur/cellular symmetric-JM centrality out of the proof graph without a separately audited theorem.

