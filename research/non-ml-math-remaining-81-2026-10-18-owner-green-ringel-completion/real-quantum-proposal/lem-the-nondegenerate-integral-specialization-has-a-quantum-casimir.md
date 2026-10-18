---
id: lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir
kind: lemma
title: The nondegenerate integral specialization has a quantum Casimir
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form
- thm-integral-triangular-decomposition-for-the-lusztig-form
- thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique
- lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality
proof_strategy: direct
sources:
  references:
  - title: George Lusztig, Introduction to Quantum Groups, chapter 6, sections 6.1.1–6.1.2
    url: https://math.mit.edu/~gyuri/papers/split-qg1/ch6.pdf
  - title: Toshiyuki Tanisaki, Characters of integrable highest weight modules over a quantum group, section 4
    url: https://arxiv.org/pdf/1506.00826
---

## Statement

Let $\nu=\sqrt{p^a}>1$, $K=\mathbb Q(\nu)$, and let $U$ be the actual specialization at $t=\nu$ of the Lusztig integral form for a finite symmetric Cartan datum, extended to a regular realization. Use the source coproduct $\Delta E_i=E_i\otimes1+K_i\otimes E_i$, $\Delta F_i=F_i\otimes K_i^{-1}+1\otimes F_i$. Its two halves are the actual integral specializations, without any numerical Serre-only presentation assertion. Write $Q=\bigoplus_i\mathbb Z\alpha_i$ and put $f(\lambda)=(\lambda,\lambda)+2\sum_i n_i$ for $\lambda=\sum_i n_i\alpha_i\in Q$.

On every $Q$-label-graded $U$-module whose weights lie in a finite union of translates of $-Q_+$, there is a natural operator $\mathcal C$, commuting with $U$, such that its action on a highest-weight vector of label $\lambda\in Q$ is $\nu^{f(\lambda)}$. Consequently it acts by $1$ on each Verma module $M_U(-\alpha_i)$ and its subquotients. A nonzero highest-weight vector of label $-\beta$ in a subquotient of $\bigoplus_i M_U(-\alpha_i)$ must satisfy $(\beta,\beta)=2\operatorname{ht}\beta$.

## Facts & Assumptions

**Given:** The symmetric datum with a regular label realization, the actual integral specialization $U$, and a module with the stated bounded-above label support. The inherited Choice hypothesis is that of the integral/global-basis suppliers.

[F1] The two specialized halves have nondegenerate homogeneous pairings, including at the inverse parameter ([[thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form]]). The integral factors are free, with finite homogeneous half components, and have integral triangular decomposition ([[thm-integral-triangular-decomposition-for-the-lusztig-form]]).

[F2] The generic library quasi-$R$ family has degree components in the positive half tensor the negative half, is normalized by $\Theta_0=1$, and satisfies $\Delta(u)\Theta=\Theta\bar\Delta(u)$. Each component is a coevaluation matrix for the generic nondegenerate homogeneous pairing; it is constructed by inverting its finite Gram matrix ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]).

[F3] Integral bar exchanges the two coefficient parameters and fixes divided powers ([[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]).

## Proof

1.1 First the specialization has the usual triangular factors. At $\nu>1$ every quantum integer factorial and every toral-binomial denominator $\prod_{r=1}^n(t^r-t^{-r})$ is nonzero. Hence every specialized divided power and toral binomial is a scalar multiple of a polynomial in the undivided root generators and the group-like torus. Conversely the torus remains precisely its group algebra: for one simple direction the integral toral basis $K^\delta T_{0,r}$, $\delta\in\{0,1\}$, is Laurent triangular, since $T_{0,r}$ has powers $K^r,K^{r-2},\ldots,K^{-r}$ with nonzero extreme coefficients; ordered by the new extreme powers, this is an invertible triangular change of basis with all coefficients evaluable at $\nu$. Tensor the finitely many simple directions and the unchanged lattice-coset representatives. Together with [F1], this proves $U\cong U^-\otimes K[P^\vee]\otimes U^+$ as a vector space. In particular $M_U(\lambda)=U^-v_\lambda$ has the expected free half coordinates for every integral label $\lambda$. This uses only actual integral specialization. [F1, given, algebra]

1.2 Transport the generic library algebra to the displayed source convention by $q\mapsto t^{-1}$, $E_i^{\mathrm{lib}}\mapsto F_i$, $F_i^{\mathrm{lib}}\mapsto E_i$, and $K_h^{\mathrm{lib}}\mapsto K_h$. The toral actions hold because the root signs and parameter are both inverted. The mixed relation changes sign in both its commutator and its denominator. Symmetric quantum integers are invariant under parameter inversion, so every Serre relation is preserved. The library coproducts become exactly those in the statement. Thus [F2] transports to a generic tensor $\Theta=\sum_\gamma\Theta_\gamma$ with $\Theta_\gamma\in U^-[-\gamma]\otimes U^+[\gamma]$ and source identity $\Delta(u)\Theta=\Theta\bar\Delta(u)$, where $\bar\Delta E_i=E_i\otimes1+K_i^{-1}\otimes E_i$ and $\bar\Delta F_i=F_i\otimes K_i+1\otimes F_i$. This transported tensor is normalized by $\Theta_0=1$. [F2, F3, algebra]

2.1 Each transported coefficient is regular at $t=\nu$: in global bases its construction in [F2] uses inverses of homogeneous Gram matrices, quantum factorials and nonzero generator normalization scalars. By [F1] the Gram matrices at $q=\nu^{-1}$ are invertible, and every other displayed denominator is nonzero. Thus every finite-degree tensor identity of step 1.2 can be evaluated, yielding a well-defined specialized $\Theta$ satisfying the same identities on the actual $U$. This is an evaluation of established identities at a separately proved nondegenerate value, not an assumption that a generic nonzero determinant remains nonzero. [F1, F2, step 1.2, algebra]

3.1 Write $\Theta_\gamma=\sum_a a_{\gamma,a}\otimes b_{\gamma,a}$, in negative and positive degrees respectively, and define $\Omega=\sum_{\gamma,a}S(a_{\gamma,a})b_{\gamma,a}$. On any vector of label $\lambda$ in the stipulated module this is a finite sum: a nonzero $b_{\gamma,a}v$ requires $\lambda+\gamma$ in the bounded-above support, bounding the height of $\gamma$. Apply $m(S\otimes1)$ to the source $E_i$ intertwining identity from step 2.1. The two terms on its left cancel, because $S(E_i)=-K_i^{-1}E_i$. The terms on its right are $-K_i^{-1}E_i\Omega+K_i\Omega E_i$. Hence $K_i^{-1}E_i\Omega=K_i\Omega E_i$. For $F_i$, the two left terms cancel because $S(F_i)=-F_iK_i$, leaving $-F_iK_i\Omega K_i+\Omega F_i=0$. Toral weight zero gives $K_h\Omega=\Omega K_h$. These computations can first be truncated in root height; all boundary terms contain a positive-degree factor of height tending to infinity acting on $v$, $E_iv$ or $F_iv$ and vanish for a sufficiently large truncation. Therefore the operator identities are valid on every vector. [step 2.1, algebra]

4.1 For a homogeneous vector $v$ of label $\lambda\in Q$, set $\mathcal C(v)=\nu^{f(\lambda)}\Omega v$. Since $(\alpha_i,\alpha_i)=2$, $f(\lambda)-f(\lambda-\alpha_i)=2(\lambda,\alpha_i)$. The $E_i$ identity of step 3.1 says $E_i\Omega v=\nu^{2(\lambda+\alpha_i,\alpha_i)}\Omega E_iv$, which, with $f(\lambda+\alpha_i)-f(\lambda)=2(\lambda+\alpha_i,\alpha_i)$, gives $\mathcal C E_i=E_i\mathcal C$. The $F_i$ identity says $F_i\Omega v=\nu^{-2(\lambda,\alpha_i)}\Omega F_iv$, giving the other commutation by the first difference formula. The toral identity handles all group-likes. Thus $\mathcal C$ commutes with $U$, is natural for graded module maps and descends to subquotients. If $v_\lambda$ is highest, all positive-height $b_{\gamma,a}$ kill it, and $\Theta_0=1$ gives $\Omega v_\lambda=v_\lambda$. Hence $\mathcal C$ is $\nu^{f(\lambda)}$ on its cyclic module. [step 3.1, given, algebra]

5.1 For $\lambda=-\alpha_i$, $f(\lambda)=2-2=0$, so $\mathcal C=1$ on $M_U(-\alpha_i)$, its finite direct sum over $I$, and every graded subquotient. A nonzero highest vector of weight $-\beta$ in such a subquotient also has eigenvalue $\nu^{f(-\beta)}$ by step 4.1. Since $\nu>1$ and $f(-\beta)$ is an integer, equality with $1$ implies $f(-\beta)=0$, namely $(\beta,\beta)=2\operatorname{ht}\beta$. This proves all claims. [step 1.1, step 4.1, algebra] ∎
