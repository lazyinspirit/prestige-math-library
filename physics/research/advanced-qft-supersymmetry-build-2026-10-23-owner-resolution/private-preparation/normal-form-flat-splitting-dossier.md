# Intrinsic constant-summand split of a positive real linear monad

Restored from retained history after /tmp loss; newly written research-only bytes, fresh hash. Conditional preparation only, with no public source/metadata/native/authority changes or proof acceptance. The higher-rank companion now derives the Hermitian lift conditional on analytic scalar cohomology; this dossier states that lift explicitly as its hypothesis.

## Hypotheses and maps

On P³(C), let UO(-1) --alpha--> SO --beta--> U′O(1) be a bundle monad with middle F, trivial on every real twistor line, and with the specified positive sigma-Hermitian pairing and unitary framing. Write alpha(z)=Σz_i alpha_i, beta(z)=Σz_i beta_i. Assume a nondegenerate compatible Hermitian middle form H has actually been lifted from THAT pairing, with normalized identity

beta(z)=alpha(jz)†H, j²=-1, hence beta(jz)†=-H alpha(z).

An invertible constant end-space factor leaves the kernel conclusions unchanged, but mere agreement of kernels without agreement of quotient pairing/sign is insufficient. In the first-slot-linear Ward convention the quotient pairing is b_F([u_z],[v_sigma(z)])=v†Hu. Using u†Hv instead conjugates the convention without changing positivity.

Explicit analytic scalar prerequisites: H⁰P³O=C; H⁰P³O(-1)=H¹P³O(-1)=0; H⁰P¹O(-1)=0. The global H¹ statement must be supplied analytically, not silently by algebraic cohomology. The pending67 theorem plus the exact hyperplane sequence 0→O(-1)→O→O_H→0 gives these negative-twist groups once67 is genuinely proved.

## 1. Identify the constant global sections

Put K=ker beta. From 0→UO(-1)→K→F→0 and the global H⁰/H¹ vanishing, H⁰K→H⁰F is an isomorphism. Since K⊂SO and H⁰O=C,

H⁰F=L:=intersection_i ker beta_i.

Every global section has a unique constant lift in L. Define M=Σ_i im alpha_i. Linearity implies M=span_z im alpha(z), and j is bijective, so the lifted kernel relation gives L=M^perp.

The descended cross-sigma pairing is well defined: shifting the first representative by alpha(z)a gives v†H alpha(z)a=0 from beta(jz)v=-alpha(z)†Hv=0; shifting the second by alpha(jz)b gives (alpha(jz)b)†Hu=0 from beta(z)u=0. The forced minus multiplies zero; it does not negate the middle form. For constant l,m∈L the line-section pairing is exactly m†Hl.

## 2. Positivity requires an injection on each line

If a constant l∈L restricts to the ZERO section of F on a real line ell, restricted exactness 0→UO_ell(-1)→K|ell→F|ell→0 puts l in the image of H⁰UO_ell(-1)=0. Therefore l0. Thus L→H⁰(F|ell) is injective. Positive definiteness of the given section pairing now gives l†Hl>0 for every nonzero l∈L, without presuming H positive on all S.

Only H⁰O_ell(-1)=0 is needed for this line injection; the global identification H⁰F=L separately used H¹P³O(-1)=0.

## 3. Canonical orthogonal split and framing

H|L is positive and hence nondegenerate. Finite-dimensional Hermitian linear algebra gives S=L⊕L^perp. Because H is nondegenerate and L=M^perp, double orthogonal complement gives M=L^perp. Therefore M is nondegenerate even before its positivity is proved.

Every alpha_i lands in M and every beta_i kills L. The complex and its real pairing split, so

F=(L⊗O)⊕F_M.

The reduced F_M is trivial and positive on each real line. Indeed the holomorphic idempotent onto the constant L summand in a trivialization of F|ell has global holomorphic scalar matrix entries on P¹, hence is constant; its complementary image is trivial, with the positive orthogonal-complement pairing. Also H⁰F_M=M∩L=0, so L⊗O is the maximal constant trivial summand in this precise sense.

Under the isometric framing F|ell_infinity≅W⊗O, L identifies with a positive subspace W_L, and the complementary framing is W_L^perp. No framing dimension is discarded. The term 'flat' refers intrinsically to this constant orthogonal monad factor; in explicit Ward reconstruction its constant frames have zero derivatives and give the trivial connection, without an additional global Ward inverse premise.

## 4. Boundary and Verdier interface

At k0 the end spaces vanish, M0 and L=S, so positivity is immediate on S from line positivity. A preexisting trivial flat summand always lies in L. Do NOT assert that the span Phi of alpha coefficients surjects onto the original full middle S in these cases.

Instead define Phi:U⊗C⁴→M by Phi(u⊗e_i)=alpha_i u: it is onto M by definition. The higher-rank companion supplies explicit symplectic doubling to verify Verdier6.11's real/quaternionic hypotheses; the given positive reduced line pairing supplies its c′ complement condition. A proved finite-matrix positivity lemma then makes the pulled-back form semipositive, surjectivity makes H|M semipositive, and nondegeneracy makes it positive definite. Reattach positive L.

Still separate: actual analytic scalar proof; internal finite matrix positivity proof; normalized raw coefficient extraction, residual U(k), rotations/framing and first-order families. This flat-splitting reduction does not certify the complete normal-form theorem.
