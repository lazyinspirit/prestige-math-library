---
id: lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower
kind: lemma
title: Generic cyclotomic local dictionaries glue to a tower
status: draft
origin: session
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
deps: [def-type-a-affine-presentations-and-charged-cyclotomic-quotients, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-cyclotomic-klr-induction-and-restriction-functors, lem-generic-cyclotomic-type-a-support-is-bounded-by-rank, lem-integer-color-degenerate-hecke-klr-local-inverse-tables, lem-generic-nondegenerate-local-inverse-tables]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras
      url: https://arxiv.org/pdf/0808.2032v4
---

## Statement

Let $k$ have characteristic zero, let $\xi\in k^\times$ have infinite
multiplicative order, and let $m_1,\ldots,m_\ell$ be any finite integral
multicharge. Write $\lambda_i=\#\{j:m_j=i\}$ and $S=\{m_j\}$.
Let $H_d^{\deg}$ and $H_d^\xi$ denote the arbitrary-base affine presentations
with first-strand cyclotomic polynomials $\prod_j(x_1-m_j)$ and
$\prod_j(X_1-\xi^{m_j})$, respectively. Let $R_d^\lambda$ be the cyclotomic
KLR algebra of the integer line $i\to i+1$, with the dot/crossing convention
of the local dictionaries in [A2].

**Conditional proposal: [A1] and [A2] are inputs, not claims proved here.**
Under these inputs the formulas
$$y_re(\nu)=(x_r-\nu_r)e(\nu),\qquad \psi_re(\nu)=(s_r+p_{\nu_r,\nu_{r+1}}(y_r,y_{r+1}))q_{\nu_r,\nu_{r+1}}(y_r,y_{r+1})^{-1}e(\nu)$$
and
$$y_re(\nu)=(1-\xi^{-\nu_r}X_r)e(\nu),\qquad \psi_re(\nu)=(T_r+P_{\nu_r,\nu_{r+1}}(y_r,y_{r+1}))Q_{\nu_r,\nu_{r+1}}(y_r,y_{r+1})^{-1}e(\nu)$$
give isomorphisms $\phi_d^{\deg}:R_d^\lambda\to H_d^{\deg}$ and
$\phi_d^\xi:R_d^\lambda\to H_d^\xi$ in every rank, including zero.
Their inverses send the Hecke generators to
$$x_r=\sum_\nu(\nu_r+y_r)e(\nu),\qquad s_r=\sum_\nu(\psi_rq_{\nu_r,\nu_{r+1}}-p_{\nu_r,\nu_{r+1}})e(\nu)$$
and
$$X_r=\sum_\nu\xi^{\nu_r}(1-y_r)e(\nu),\qquad T_r=\sum_\nu(\psi_rQ_{\nu_r,\nu_{r+1}}-P_{\nu_r,\nu_{r+1}})e(\nu).$$
All series are multiplied on the right of the crossing, as displayed.

These isomorphisms respect the maps appending a strand on the right and the
last-color projectors. Consequently $\phi_d^\xi(\phi_d^{\deg})^{-1}$ is
an actual isomorphism of the two ungraded cyclotomic towers, and its module
equivalences intertwine every color induction and restriction functor,
including their composites and every finite rank truncation. Here the
degenerate color $i$ corresponds to the nondegenerate eigenvalue $\xi^i$.
No finite-quantum-characteristic theorem is an input.

## Facts & Assumptions

**Given:** The parameters, presentations, and the following two explicit
conditional inputs.

[A1] [[lem-generic-cyclotomic-type-a-support-is-bounded-by-rank]] supplies the support input: the algebras in rank $d>0$ are finite-dimensional, their dots are
nilpotent, and every surviving color lies in
$B_d=[\min S-d+1,\max S+d-1]\cap\mathbb Z$. Hecke joint spectral
projectors $e_H(\nu)$ exist over $k$, with eigenvalues $\nu_r$ or
$\xi^{\nu_r}$. The full-line KLR rank algebra is unchanged by any finite
interval containing $B_d$. At level zero all positive ranks are zero and
rank zero is $k$.

[A2] There are fixed pairwise formal series $p_{ab},q_{ab},P_{ab},Q_{ab}$
for every $a,b\in\mathbb Z$, independent of rank, multicharge, content and
window; $q_{ab},Q_{ab}$ are units. On every finite integer window, the local
replacements displayed in the Statement satisfy all affine mixed,
quadratic, distant and braid relations in both directions, with the same
KLR convention. This input is supplied locally by
[[lem-integer-color-degenerate-hecke-klr-local-inverse-tables]] and
[[lem-generic-nondegenerate-local-inverse-tables]], including all five equality
patterns of three colors in the same native convention $\psi=-\tau$; the
cited article and a finite-$e$ instantiation do not replace these local proofs. The first direction
uses the actual Hecke joint projectors and dots; the reverse uses the KLR
word idempotents and dots. No cyclotomic relation, inverse composite,
spectral identification or tower assertion is assumed in this input.

## Proof

1.1 Evaluate a formal series in commuting nilpotent dots by its finite Taylor sum. This evaluation is independent of the nilpotence exponent chosen: every larger truncation differs only by zero monomials. A series with nonzero constant term is a unit by a terminating geometric expansion. Thus all replacements in the Statement are defined. By [A1] only finitely many words survive in any rank. The local relation verifications in [A2], applied on those words, give homomorphisms between the affine presentations before checking the first-strand quotient. No cyclic wraparound or reduction of integer colors is used. [A1, A2, algebra]

2.1 On a first color $i$, write the degenerate cyclotomic polynomial as $f(i+y)=y^{\lambda_i}U_i(y)$, where $U_i(y)=\prod_{m_j\ne i}(i-m_j+y)$. Its constant term is nonzero in characteristic zero. In the other branch $g(\xi^i(1-y))=(-\xi^i)^{\lambda_i}y^{\lambda_i}V_i(y)$, where $V_i(y)=\prod_{m_j\ne i}(\xi^i-\xi^{m_j}-\xi^iy)$. Infinite multiplicative order makes its constant term nonzero. Both auxiliary factors are units after nilpotent evaluation. Thus the Hecke cyclotomic relation on each projector is equivalent to $y_1^{\lambda_i}e(i,\ldots)=0$. If $\lambda_i=0$, the unit polynomial kills the entire projector. This proves the cyclotomic factorization and descent in both directions. [given, step 1.1, algebra]

3.1 Denote the descended reverse map by $\sigma_d:H_d\to R_d^\lambda$. On $e_R(\nu)R_d^\lambda$, each $\sigma_d(x_r)$ has sole generalized eigenvalue $\nu_r$, or $\sigma_d(X_r)$ has sole generalized eigenvalue $\xi^{\nu_r}$. Distinct colors have distinct values, and the orthogonal word idempotents sum to one. The simultaneous primary projector is therefore precisely left multiplication by $e_R(\nu)$. The Hecke polynomial projector maps to this idempotent: its Chinese-remainder polynomial is one modulo the corresponding primary factors and zero modulo all other factors. Hence $\sigma_d(e_H(\nu))=e_R(\nu)$. The forward map already sends $e_R(\nu)$ to $e_H(\nu)$. [A1, step 2.1, algebra]

4.1 Both composites fix the word projectors by step 3.1 and the dots by direct substitution $x_r-\nu_r=y_r$, or $1-\xi^{-\nu_r}X_r=y_r$. On a word, the crossing composite is $(\psi_rq_{ab}-p_{ab}+p_{ab})q_{ab}^{-1}=\psi_r$, or $(\psi_rQ_{ab}-P_{ab}+P_{ab})Q_{ab}^{-1}=\psi_r$. Conversely the Hecke composite sends $s_re_H(\nu)$ to $((s_r+p_{ab})q_{ab}^{-1}q_{ab}-p_{ab})e_H(\nu)=s_re_H(\nu)$; the formula with $T,P,Q$ is identical. The polynomial generators are fixed, and the units $X_r^{-1}$ are fixed because inverses are unique. Thus the homomorphisms are inverse on every generator, without commuting a crossing through its series. [step 1.1, step 3.1, algebra]

5.1 For ranks through $D>0$ at positive level use the common interval $W_D=[\min S-D,\max S+D]\cap\mathbb Z$. It contains the support through rank $D$ and one unused ghost color beyond each endpoint of $B_D$. A crossing permutes existing colors and never creates one; nevertheless these endpoint colors keep every boundary edge of a surviving color represented by the integer-line convention. For operations reaching rank $D+t$, use $W_{D+t}$, and enlarge further to contain any specified color and its neighbors. All extra word idempotents vanish by [A1]. Since [A2] fixes the same series for each ordered pair in every interval, evaluation on surviving words is unchanged by enlargement. The resulting maps are independent of windows and glue across all finite rank bounds. [A1, A2, step 4.1, construct]

6.1 Let $\iota_H:H_d\to H_{d+1}$ send each existing Hecke generator to the generator with the same index. It is a homomorphism because all rank-$d$ relations, including the first-strand relation, hold in rank $d+1$. Its spectral projector satisfies $\iota_H(e_H(\nu))=\sum_a e_H(\nu,a)$: the first $d$ polynomial generators give a representation of $H_d$ on the rank-$d+1$ regular module, so their primary projector is the sum of exactly these joint projectors. Prefixes violating rank-$d$ support are zero by [A1] applied to this representation. This argument also holds for $d=0$, where the empty projector is one. [A1, given, step 5.1, algebra]

7.1 Define $\iota_R=\sigma_{d+1}\iota_H\phi_d$. The established inverse maps make this a homomorphism. Steps 3.1 and 6.1 give $\iota_R(e_R(\nu))=\sum_a e_R(\nu,a)$. The unchanged polynomial generators give the usual prefix dots. For $r<d$, the rank-independent pair series in [A2] and cancellation in step 4.1 give $\iota_R(\psi_re_R(\nu))=\sum_a\psi_re_R(\nu,a)$. These are exactly the standard right-appending KLR maps, so the individually constructed isomorphisms commute with the actual tower maps. Injectivity of the tower maps is neither needed nor inferred. [A2, step 4.1, step 6.1, algebra]

8.1 Put $\epsilon_i^R=\sum_\nu e_R(\nu,i)$ in rank $d+1$, and define $\epsilon_i^H$ by the analogous spectral sum. Step 3.1 gives $\phi_{d+1}(\epsilon_i^R)=\epsilon_i^H$. Each last-color projector commutes with every prefix generator, since prefix crossings permute only the first $d$ colors and prefix dots preserve all colors. On left modules color restriction is $N\mapsto\epsilon_iN$, with the rank-$d$ action through its prefix map. Color induction is $M\mapsto A_{d+1}\epsilon_i\otimes_{A_d}M$. Step 7.1 identifies both prefix actions, and the algebra isomorphism identifies these induction bimodules on both sides. Explicitly $a\epsilon_i\otimes m\mapsto\phi_{d+1}(a)\epsilon_i\otimes m$ is a balanced bijection, with inverse obtained from $\sigma_{d+1}$. Restriction agrees by the same projector equality. These formulas are natural in module maps. [step 3.1, step 7.1, construct]

9.1 Composing the two comparisons through the same $R_d^\lambda$ proves the claimed degenerate/nondegenerate tower equivalence. Naturality from step 8.1 intertwines repeated induction and restriction, while step 5.1 covers every specified finite rank cut. At level zero use the identity on rank zero and the unique maps between zero algebras in positive rank; the sole map from rank zero to rank one is the map to zero, and all positive-rank functors vanish. Thus all ranks and levels are included. Every conclusion remains conditional on [A1] and [A2]; no local table identity or based theorem has been established by this gluing proof. [A1, step 5.1, step 8.1] ∎

## Remarks

The explicit inputs [A1] and [A2] are the declared local support and inverse-table
suppliers. All displayed formulas use their native convention $\psi=-\tau$
and the same dots. The proof establishes the gluing conclusion from those
inputs; a based categorification or standard-class dictionary still requires
its own proved suppliers.

For finite-dimensional modules the tower equivalence preserves simples and
indecomposable projectives up to isomorphism and intertwines their ungraded
$G_0$ and $K_0$ residue operators. This follows from the exact equivalence and
the bimodule identification, and permits transport of an actually proved
parameter-one based theorem over $\mathbb C$. It does not identify Specht
standard classes, graded decomposition polynomials, or a quantum parameter
different from one. Those claims require their own dictionaries and proofs.
