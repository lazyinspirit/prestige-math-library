---
id: lem-cft-rank-one-lattice-conformal-screenings
kind: lemma
title: Conformal subalgebra in the kernel of $v_{(0)}$
status: published
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - lem-cft-long-screening-string-lengths
  - def-cft-rank-one-square-zero-lattice-data
  - lem-cft-rank-one-square-zero-lattice-jacobi
  - def-conformal-vertex-algebra
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  lem-cft-long-screening-string-lengths: mathematical-premise
  def-cft-rank-one-square-zero-lattice-data: mathematical-premise
  lem-cft-rank-one-square-zero-lattice-jacobi: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: 'Section 1, printed pp.4–7: conformal vector, screenings and four triplet states. The proof below establishes these properties directly; strong generation and kernel equality are separate assertions.'
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: 'Sections 3–4: conformal and screening conventions in the square-zero extension.'
---

## Statement

In the explicit rank-one square-zero lattice data with integer $p\ge2$, set
$$\omega=\left(\frac{x_1^2}{4p}+\frac{p-1}{2p}x_2\right)\mathbf1,\qquad v=e^{-\alpha/p},\qquad Q=(e^\alpha)_{(0)}:\mathcal A\to\mathcal A,\qquad F=e^{-\alpha},\quad H=QF,\quad E=Q^2F.$$
The field $Y(\omega,z)=\sum_nL(n)z^{-n-2}$ on the algebra $\mathcal A$ and its module $\mathcal M$ satisfies the Virasoro relations with $c=1-6(p-1)^2/p$, $L(-1)=T$ on $\mathcal A$, and weight operator
$$L(0)(f e^{t\alpha})=\left(\sum_{k\ge1}k x_k\partial_{x_k}+pt^2-(p-1)t\right)f e^{t\alpha}.$$
In this statement, a nonzero state $u\in\mathcal A$ is primary of weight $\Delta$ if $L(0)u=\Delta u$ and $L(n)u=0$ for every $n>0$. Its restriction to $V_L$ is a conformal vertex algebra of CFT type. Both $e^\alpha$ and $v$ are primary of weight one, so their zero modes commute with Virasoro. The operator $Q$ preserves every $L(0)$-eigenspace and is a derivation of all state products on $\mathcal A$, meaning that for every $a,b\in\mathcal A$ and $k\in\mathbb Z$,
$$Q(a_{(k)}b)=(Qa)_{(k)}b+a_{(k)}(Qb).$$
It restricts to $V_L$ and obeys $Q\omega=0$, $QF=H$, $QH=E$, $QE=0$. The three states $F,H,E$ are primary of weight $2p-1$.

Let $W$ be the smallest linear subspace of $V_L$ containing $\mathbf1,\omega,F,H,E$ and closed under every product $a_{(k)}b$, $k\in\mathbb Z$, of its elements. Then $W$ is a conformal vertex subalgebra of CFT type, is preserved by $Q$, and is contained in $\ker_{V_L}v_{(0)}$. The same ambient ordinary fields restrict to actual $W$-module actions on the lattice sectors above. This statement does not assert strong generation, equality with an entire screening kernel, endpoint simplicity or any extension theorem.

## Statement references

[[lem-cft-long-screening-string-lengths]]

[[def-cft-rank-one-square-zero-lattice-data]]

[[lem-cft-rank-one-square-zero-lattice-jacobi]]

[[def-conformal-vertex-algebra]]

[[lem-cft-locality-to-jacobi-residue-calculus]]

## Facts & Assumptions

**Given:** The square-zero lattice data, integer $p\ge2$, and definitions in the Statement.

[F1] [[def-cft-rank-one-square-zero-lattice-data]] gives all oscillator, exponential and normal-order formulas.

[F2] [[lem-cft-rank-one-square-zero-lattice-jacobi]] proves the full adjoint and module Jacobi identities and translation formula for these actual fields. Their residues give $[a_{(0)},Y(b,z)]=Y(a_{(0)}b,z)$ and the same module identity.

[F3] [[def-conformal-vertex-algebra]] specifies the Virasoro, translation, finite weight-space and CFT-type requirements used for $V_L$ and $W$.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] proves that homogeneous states of weights $r,s$ have $a_{(k)}b$ of weight $r+s-k-1$ whenever it is nonzero.

[F5] [[lem-cft-long-screening-string-lengths]] at $i=0$, $n=1$ gives $Q^2e^{-\alpha}\ne0$ for every integer $p\ge2$. Its $Q_t$ is the restriction of the present $Q$ to $\mathcal F_t$: the exponential and substitution formulas in [F1] agree with the generic oscillator data, including scalar cocycle one.

## Proof

1.1 Put $q=(p-1)/(2p)$. The field of $\omega$ is $\mathcal T(z)={:}\alpha(z)^2{:}/(4p)+q\partial_z\alpha(z)$. The oscillator contraction $\alpha(z)\alpha(w)\sim2p/(z-w)^2$ gives $\mathcal T(z)\mathcal T(w)\sim(1/2-12pq^2)/(z-w)^4+2\mathcal T(w)/(z-w)^2+\partial_w\mathcal T(w)/(z-w)$. Specifically the double quadratic contraction is $1/2$ in fourth order; the two improvement terms give $q^2\partial_z\partial_w(2p/(z-w)^2)=-12pq^2/(z-w)^4$; the mixed cubic poles cancel and their remaining poles are $2q\partial\alpha(w)/(z-w)^2+q\partial^2\alpha(w)/(z-w)$. The quadratic single contractions give the remaining quadratic part and its derivative. Taking residues using [F2] proves the Virasoro relations and the displayed central charge. The modes are
$$L(n)=\frac1{4p}\sum_{j\in\mathbb Z}{:}\alpha_j\alpha_{n-j}{:}-q(n+1)\alpha_n.$$
At $n=-1$ the improvement term vanishes. Pairing the terms with indices $j=m$ and $j=-m-1$ for $m\ge0$ gives
$$L(-1)=\frac1{2p}\left(\alpha_{-1}\alpha_0+\sum_{m\ge1}\alpha_{-m-1}\alpha_m\right).$$
On $\mathcal F_t$ this acts as $t x_1+\sum_{m\ge1}m x_{m+1}\partial_{x_m}$, precisely the translation $T$ in [F1] and [F2]. At $n=0$ the mode formula gives the weight operator in the Statement. On $V_L$ its vacuum-charge weights are $pn^2-(p-1)n$, nonnegative integers with equality only at $n=0$. Every weight space is finite because this quadratic bounds the charges, and the polynomial space in each remaining oscillator degree has the finite partition basis. Thus $V_L$ has all properties in [F3]. [given, F1, F2, F3, algebra]

2.1 The same single/double contractions with an exponential of charge $t$ give $\mathcal T(z)\mathcal E_t(w)\sim(pt^2-(p-1)t)\mathcal E_t(w)/(z-w)^2+\partial_w\mathcal E_t(w)/(z-w)$. The double quadratic contraction contributes $pt^2$, the improvement contributes $-(p-1)t$, and the single quadratic contraction contributes $t{:}\alpha\mathcal E_t{:}=\partial\mathcal E_t$ by differentiating its explicit exponential formula. Thus the corresponding vacuum states are primary of the given weights. In particular $e^\alpha$ and $v$ have weight one, while $F$ has weight $2p-1$. For a weight-one primary $a$, the residues give $[L(n),Y(a,z)]=\partial_z(z^{n+1}Y(a,z))$, whose zero-mode residue is zero. Both screenings therefore commute with every $L(n)$. Since $Q\mathbf1=0$ and $\omega=L(-2)\mathbf1$, this implies $Q\omega=0$. The zero-mode identities in [F2] make $Q$ and $v_{(0)}$ derivations of every state product, with $Q$ restricting to $V_L$. By [F5] with $i=0$, $n=1$, $E=Q^2F\ne0$; hence $H=QF\ne0$, since otherwise $QH=E$ would vanish. The state $F=e^{-\alpha}$ is itself a nonzero constant polynomial in its labelled Fock space. Commuting $Q$ with Virasoro supplies the weight and positive-mode equations for $H,E$; together with this nonvanishing, all three states are primary in the stated nonzero sense. Moreover $QE=Q^3F$ would have charge $2\alpha$ and weight $2p-1$, but that charge has minimum weight $2p+2$. Hence $QE=0$. [F1, F2, F5, step 1.1, algebra]

3.1 Directly $Y(v,z)\omega$ is obtained by substituting $x_1+2z^{-1}$ and $x_2+2z^{-2}$ into $x_1^2/(4p)+qx_2$, followed by multiplication by the creation exponential. Before that multiplication the result is $\omega+(x_1/p)z^{-1}+z^{-2}$, while the exponential begins $1-(x_1/p)z+\cdots$. Thus $v_{(0)}\omega=0$, $v_{(1)}\omega=v$ and $v_{(n)}\omega=0$ for $n\ge2$. Also $Y(v,z)F$ begins with $z^2$, so $v_{(0)}F=0$. The explicit exponentials give $Qv=x_1e^{(1-1/p)\alpha}=\frac p{p-1}T e^{(1-1/p)\alpha}$. By [F2], $[Q,v_{(0)}]=(Qv)_{(0)}=0$, since a derivative has zero zero-mode residue. Hence $v_{(0)}H=v_{(0)}E=0$. The derivation property makes its kernel a vertex subalgebra containing all four generators, so it contains $W$. The $Q$ table of step 2.1 and its derivation property imply $QW\subset W$. Each generator is homogeneous; [F4] shows that products of homogeneous states have the mode-weight rule, so the span generated by all their products is graded. It inherits finite weight spaces, nonnegative weights, the one-dimensional vacuum space, the Virasoro vector and translation from $V_L$, so it has the properties in [F3]. Restricting the full module Jacobi identity of [F2] to this actual subalgebra supplies its ordinary module actions; no classification or endpoint claim is used. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
