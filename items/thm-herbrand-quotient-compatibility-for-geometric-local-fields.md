---
id: thm-herbrand-quotient-compatibility-for-geometric-local-fields
kind: theorem
title: "Herbrand compatibility for quotients of geometric local Galois groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-finite-geometric-upper-ramification-numbering
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-fundamental-theorem-of-finite-galois-theory
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free finite valuation-ring, polynomial and finite-group argument at the original geometric scope."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Statement

Let $L/K$ be a finite Galois extension of complete discretely valued fields of characteristic $p>0$ with algebraically closed residue field, let $G=\operatorname{Gal}(L/K)$, let $H\triangleleft G$, and set $E=L^H$. For every real $v\geq0$, the image of the upper-numbered group $G^v(L/K)$ under restriction to $\operatorname{Gal}(E/K)=G/H$ is exactly $G^v(E/K)$; equivalently, $G^v(L/K)H/H=G^v(E/K)$.

## Statement references

[[def-finite-geometric-upper-ramification-numbering|Upper numbering for a finite geometric local extension]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §§2.3.2.1–2.3.2.4](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** The finite Galois tower $L/E/K$, the normalized discrete valuations and the groups in the Statement. Lower groups satisfy $G_t=G_{\lceil t\rceil}$ for $t>0$, and $G_0=G$.

[F1] The Herbrand function is $\varphi(u)=\int_0^u|G_t|/|G_0|\,dt$; it is a continuous increasing piecewise-linear bijection, with inverse $\psi$, and $G^v=G_{\psi(v)}$. [[def-finite-geometric-upper-ramification-numbering]]

[F2] A finite extension of a complete nonarchimedean field has a unique extended absolute value and is complete. In a Galois extension every automorphism therefore preserves its valuation. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F3] The integral closure of a Noetherian integrally closed domain in a finite separable extension of its fraction field is module-finite. [[thm-finite-integral-closure-in-a-finite-separable-extension]]

[F4] A finitely generated torsion-free module over a PID is finite free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F5] Finite Galois correspondence gives $[L:E]=|H|$ and $[E:K]=[G:H]$. [[thm-fundamental-theorem-of-finite-galois-theory]]

## Proof

1.1 We first record the needed valuation-ring calculation for any finite Galois extension $B_0/A_0$ of the type in the Statement. Write $R=\mathcal O_{A_0}$ and $S=\mathcal O_{B_0}$. The DVR $R$ is a PID and is integrally closed: if an element of its fraction field with negative valuation satisfied a monic equation over $R$, its leading term would have strictly smallest valuation, a contradiction. An element of $S$ is integral over $R$, because the polynomial formed from all its Galois conjugates is monic with coefficients in $R$, by [F2]. Conversely a monic equation over $R$ excludes negative valuation by the same argument. Thus $S$ is precisely the integral closure of $R$. By [F3] and [F4], it is finite free over $R$. Its rank is $n=[B_0:A_0]$: inverting a uniformizer of $R$ in $S$ gives $B_0$, since multiplying any element by a sufficiently high power makes its valuation nonnegative. [F2, F3, F4, given, algebra]

1.2 Let $t$ and $\pi$ be uniformizers of $A_0$ and $B_0$, and put $e=v_{B_0}(t)$. The residue field of $B_0$ is finite over that of $A_0$, since $S$ is finite over $R$; hence both residue fields are the same algebraically closed field $k$. Since $S$ is free of rank $n$, $\dim_k S/tS=n$. On the other hand $tS=\pi^eS$, and the finite filtration by powers of $\pi$ has $e$ successive factors isomorphic to $k$, so this dimension is $e$. Therefore $n=e$, and $v_{B_0}|_{A_0}=n v_{A_0}$. [step 1.1, given, algebra]

1.3 The powers $1,\pi,\ldots,\pi^{e-1}$ are linearly independent over $A_0$: the valuations of nonzero terms $a_i\pi^i$ are $e v_{A_0}(a_i)+i$, distinct modulo $e$, so a nonzero finite sum cannot vanish. Since $e=n$, these powers form a field basis. The same valuation calculation shows that a combination $\sum_{i<e}a_i\pi^i$ is integral exactly when all $a_i\in R$. Consequently $S=R[\pi]$. This valuation-ring calculation applies to $L/K$, $L/E$ and $E/K$; the intermediate field is complete by [F2]. No coefficient subfield, finite-residue assumption or sequence of residue representatives is needed. [F2, step 1.1, step 1.2, algebra]

2.1 Fix uniformizers $\alpha$ of $L$ and $y$ of $E$. For a nonidentity $g\in G$, put $i_G(g)=v_L(g\alpha-\alpha)$, and put $i_G(1)=+\infty$. Since $\mathcal O_L=\mathcal O_K[\alpha]$, factoring differences of powers shows that this is the minimum of $v_L(gx-x)$ over all $x\in\mathcal O_L$. Similarly $i_Q(\bar g)=v_E(\bar g y-y)$ for $Q=G/H$, with $i_Q(1)=+\infty$. All nonidentity values are finite and at least $1$, since the residue field is $k$. The lower groups are characterized by $i_G(g)-1\ge t$ and $i_Q(\bar g)-1\ge t$ at real $t\ge0$. For $h\in H$, the lower displacement value for $L/E$ is the same $i_G(h)$, because its minimum uses the same ring $\mathcal O_L$ and valuation $v_L$. [given, step 1.3, algebra]

2.2 Fix a nonidentity coset $\bar\sigma\in Q$ and select a lift $\sigma$ maximizing $m=i_G(\sigma)$ in that finite coset. Let $f(T)=\prod_{h\in H}(T-h\alpha)$, the monic minimal polynomial of $\alpha$ over $E$. Its coefficients lie in $\mathcal O_E$, by valuation invariance and $H$-invariance. Each is a polynomial in $y$ over $\mathcal O_K$, so its displacement under $\sigma$ is divisible by $a=\sigma y-y$. Since $f(\alpha)=0$, evaluation of $f^\sigma-f$ at $\alpha$ shows that $a$ divides $b=\prod_{h\in H}(\sigma h\alpha-\alpha)$ in $\mathcal O_L$. Here $f^\sigma$ means application of $\sigma$ to its coefficients. [F2, F5, step 1.3, step 2.1, given, choose, algebra]

2.3 Write $y=q(\alpha)$ with $q\in\mathcal O_K[T]$. Monic polynomial division gives $q(T)-y=f(T)q_1(T)$ with $q_1\in\mathcal O_E[T]$. Apply $\sigma$ to coefficients and evaluate at $\alpha$: the left side is $y-\sigma y$, and $f^\sigma(\alpha)$ equals $b$ up to sign. Thus $b$ divides $a$. Equality of their valuations, together with $v_L|_E=|H|v_E$, gives
$$|H|\,i_Q(\bar\sigma)=\sum_{h\in H}i_G(\sigma h).$$
[F5, step 1.2, step 1.3, step 2.2, algebra]

3.1 The identity $\sigma h\alpha-\alpha=\sigma(h\alpha-\alpha)+(\sigma\alpha-\alpha)$ shows $i_G(\sigma h)=\min(i_G(h),m)$ when the two values differ, by the strict ultrametric inequality. When they are equal, the inequality gives at least $m$, and maximality of the lift gives at most $m$. The identity element of $H$ also satisfies this formula with $i_G(1)=+\infty$. Therefore
$$|H|\,i_Q(\bar\sigma)=\sum_{h\in H}\min(i_G(h),m).$$
[F2, step 2.1, step 2.2, step 2.3, algebra]

3.2 For the lower groups $H_t$ of $L/E$, the definition of the Herbrand function gives, for all $u\ge0$,
$$1+\varphi_{L/E}(u)=\frac1{|H|}\sum_{h\in H}\min(i_G(h),u+1).$$
Indeed both sides take value $1$ at zero and have derivative $|H_t|/|H|$ away from the finitely many integer displacement breakpoints. The exceptional endpoints do not change the integral, and the functions are continuous. Taking $u=m-1$ in step 3.1 yields
$$i_Q(\bar\sigma)-1=\varphi_{L/E}(m-1).$$
[F1, step 2.1, step 3.1, algebra]

4.1 For $s\ge0$, a nonidentity coset is in the image of $G_s$ exactly when its maximal lift satisfies $m-1\ge s$. By strict increase of $\varphi_{L/E}$ and step 3.2, this is equivalent to $i_Q(\bar\sigma)-1\ge\varphi_{L/E}(s)$, which is its membership condition in $Q_{\varphi_{L/E}(s)}$. The identity coset is in both groups. Hence
$$G_sH/H=Q_{\varphi_{L/E}(s)}.$$
Moreover $H_s=H\cap G_s$ by step 2.1. [F1, step 2.1, step 2.2, step 3.2, given, algebra]

4.2 Away from the finitely many relevant breakpoints, step 4.1 gives
$$\frac{|G_s|}{|G|}=\frac{|Q_{\varphi_{L/E}(s)}|}{|Q|}\frac{|H_s|}{|H|}=(\varphi_{E/K}\circ\varphi_{L/E})'(s).$$
The left side is $\varphi_{L/K}'(s)$ by [F1]. The two continuous piecewise-linear functions agree at zero, so integration on their linear pieces gives
$$\varphi_{L/K}=\varphi_{E/K}\circ\varphi_{L/E}.$$
[F1, F5, step 4.1, algebra]

5.1 Given $v\ge0$, set $s=\psi_{L/K}(v)$. Step 4.2 and invertibility of $\varphi_{E/K}$ give $\varphi_{L/E}(s)=\psi_{E/K}(v)$. Substitute this in step 4.1:
$$G^v(L/K)H/H=G_sH/H=Q_{\varphi_{L/E}(s)}=Q_{\psi_{E/K}(v)}=G^v(E/K).$$
This also covers $v=0$. If $H=1$ or $H=G$, the same identities apply, with the trivial quotient or trivial relative group; the nonidentity-coset steps are simply unused when there is no such coset. [F1, step 4.1, step 4.2, given, algebra] ∎

## Axiom use

No choice principle is added. The proof fixes finitely many uniformizers and finite-basis data. Module-finiteness of the integral closure and finite torsion-free PID freeness are used at their stated unqualified scope. The proof neither invokes finite-residue local-field theorems nor requires a coefficient-field section or a countable sequence of residue lifts.
