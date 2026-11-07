---
id: thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums
kind: theorem
title: "Mellin-smoothed explicit formula for a Dirichlet-character von Mangoldt sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-dirichlet-character-von-mangoldt-sum
  - def-von-mangoldt-function
  - lem-mellin-inversion-for-smooth-compact-support
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - def-principal-dirichlet-character
  - def-parity-dirichlet-character
  - def-dirichlet-l-function
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-primitive-gauss-sum-norm
  - thm-dirichlet-l-euler-product
  - thm-euler-product-for-riemann-zeta
  - thm-gamma-meromorphic-continuation
  - thm-gamma-weierstrass-product
  - thm-residue-theorem-null-homologous-cycle
justified_by: []
proof_strategy: contour
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Green, The Prime Number Theorem, Chapter 7, §§7.1–7.4"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf"
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., §17, pp. 104–110"
      url: "https://link.springer.com/chapter/10.1007/978-1-4757-5927-3_18"
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., §19, pp. 115–120"
      url: "https://link.springer.com/chapter/10.1007/978-1-4757-5927-3_19"
    - title: "Digitized full text of Harold Davenport, Multiplicative Number Theory, 2nd ed., §§17 and 19"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
---

## Statement

Let $q\ge1$, let $\chi$ be a primitive Dirichlet character modulo $q$ of
parity $a\in\{0,1\}$, let $x>0$, and let $W:(0,\infty)\to\mathbb C$ be
infinitely differentiable and vanish outside a compact subset of
$(0,\infty)$. Write $\widetilde W$ and $\psi_W(x,\chi)$ for the Mellin
transform and smoothed sum defined above. Define the trivial-zero set

$$\mathcal T_\chi=\begin{cases}\{-a-2m:m=0,1,2,\ldots\},&q>1,\\\{-2m:m=1,2,3,\ldots\},&q=1.\end{cases}$$

For real $c>1$, $\alpha<0$, and $T>0$, suppose that the boundary of the
rectangle $\{s:\alpha\le\operatorname{Re}s\le c,
|\operatorname{Im}s|\le T\}$ contains no zero or pole of $L(s,\chi)$. Let
$\mathcal Z_\chi(\alpha,T)$ be the zeros of $L(s,\chi)$ in its interior that
are not in $\mathcal T_\chi$, and let $m_\rho$ denote the multiplicity of
$\rho\in\mathcal Z_\chi(\alpha,T)$. Set $\delta_\chi=1$ if $q=1$ and
$\delta_\chi=0$ otherwise, and put

$$G_{\chi,x,W}(s):=-\frac{L'}{L}(s,\chi)x^s\widetilde W(s).$$

Define the oriented contour remainders

$$U_{c,T}:=\frac1{2\pi i}\left(\int_{c-i\infty}^{c-iT}G_{\chi,x,W}(s)\,ds+\int_{c+iT}^{c+i\infty}G_{\chi,x,W}(s)\,ds\right),$$

$$V_{\alpha,T}:=\frac1{2\pi i}\int_{\alpha-iT}^{\alpha+iT}G_{\chi,x,W}(s)\,ds,$$

$$H_T:=\frac1{2\pi i}\left(\int_{c+iT}^{\alpha+iT}G_{\chi,x,W}(s)\,ds+\int_{\alpha-iT}^{c-iT}G_{\chi,x,W}(s)\,ds\right).$$

The rectangle is positively oriented (counterclockwise); the diagram records its edge directions and labels. The proof obtains signs from the displayed oriented integrals, not from the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw (0,0) rectangle (4,3);
  \draw[->] (4,0.8) -- (4,1.6);
  \draw[->] (2.8,3) -- (2.0,3);
  \draw[->] (0,2.2) -- (0,1.4);
  \draw[->] (1.0,0) -- (1.8,0);
  \node[below left] at (0,0) {$\alpha-iT$};
  \node[below right] at (4,0) {$c-iT$};
  \node[above left] at (0,3) {$\alpha+iT$};
  \node[above right] at (4,3) {$c+iT$};
  \node[left] at (0,1.5) {$\operatorname{Re}s=\alpha$};
  \node[right] at (4,1.5) {$\operatorname{Re}s=c$};
  \node[above] at (2,3) {$\operatorname{Im}s=T$};
  \node[below] at (2,0) {$\operatorname{Im}s=-T$};
\end{tikzpicture}
```

The finite-rectangle expression

$$\mathscr E_\chi(x,W;c,\alpha,T):=\delta_\chi x\widetilde W(1)-\sum_{\rho\in\mathcal Z_\chi(\alpha,T)}m_\rho x^\rho\widetilde W(\rho)-\sum_{\substack{\tau\in\mathcal T_\chi\\\alpha<\tau<c}}m_\tau x^\tau\widetilde W(\tau)+U_{c,T}+V_{\alpha,T}-H_T$$

equals $\psi_W(x,\chi)$, where $m_\tau$ is the multiplicity of the zero at
$\tau$. For $q>1$, the points $-a-2m$ are zeros; every negative such zero is
simple, while the multiplicity at $0$ for an even character is retained as
$m_0$. For $q=1$, the zeros $-2,-4,\ldots$ are simple and $L(0,\chi)\ne0$;
its pole at $s=1$ is exactly the pole represented by
$\delta_\chi x\widetilde W(1)$.

## Statement references

[[def-dirichlet-character-von-mangoldt-sum]].

[[def-von-mangoldt-function]].

[[def-dirichlet-character-modulo-q]].

[[def-primitive-dirichlet-character-and-conductor]].

[[def-induced-dirichlet-character]].

[[def-principal-dirichlet-character]].

[[def-parity-dirichlet-character]].

[[def-dirichlet-l-function]].

[[def-completed-dirichlet-l-function]].

[[lem-mellin-inversion-for-smooth-compact-support]].

[[thm-primitive-dirichlet-l-analytic-continuation]].

[[thm-primitive-dirichlet-l-functional-equation]].

[[thm-primitive-gauss-sum-norm]].

[[thm-dirichlet-l-euler-product]].

[[thm-euler-product-for-riemann-zeta]].

[[thm-gamma-meromorphic-continuation]].

[[thm-gamma-weierstrass-product]].

[[thm-residue-theorem-null-homologous-cycle]].

## Facts & Assumptions

**Given:** The primitive character $\chi$, its parity $a$, $x$, $W$, and
admissible contour parameters $c,\alpha,T$ from the Statement.

[F1] The twisted sum is
$\psi_W(x,\chi)=\sum_{n\ge1}\Lambda(n)\chi(n)W(n/x)$, and
$\widetilde W(s)=\int_0^\infty W(u)u^{s-1}\,du$
([[def-dirichlet-character-von-mangoldt-sum]]).

[F2] For $\operatorname{Re}s>1$,
$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$
([[def-dirichlet-l-function]]).

[F3] A character is primitive when it is not induced from a proper divisor of
its modulus; the principal primitive character modulo $1$ is primitive
([[def-primitive-dirichlet-character-and-conductor]]).

[F4] The parity $a$ is fixed by $\chi(-1)=(-1)^a$
([[def-parity-dirichlet-character]]).

[F5] The completed function is
$\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$
([[def-completed-dirichlet-l-function]]).

[F6] For primitive nonprincipal $\chi$, $L(s,\chi)$ and $\Lambda(s,\chi)$ are
entire; for the principal primitive character modulo $1$, $L=\zeta$ has its
unique simple pole at $1$ and $\Lambda$ has simple poles at $0$ and $1$
([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F7] The completed primitive $L$-function satisfies
$\Lambda(s,\chi)=\varepsilon(\chi)\Lambda(1-s,\overline\chi)$ with
$\varepsilon(\chi)=(-i)^a\tau(\chi)/\sqrt q$
([[thm-primitive-dirichlet-l-functional-equation]]). For primitive $\chi$,
$|\tau(\chi)|^2=q$ ([[thm-primitive-gauss-sum-norm]]), so
$|\varepsilon(\chi)|=1$ and in particular $\varepsilon(\chi)\ne0$.

[F8] Every Dirichlet $L$-function has an absolutely convergent, nonzero Euler
product on $\operatorname{Re}s>1$
([[thm-dirichlet-l-euler-product]]).

[F9] On $\operatorname{Re}s>1$,
$\zeta(s)=\prod_p(1-p^{-s})^{-1}$, with absolute and locally uniform
convergence ([[thm-euler-product-for-riemann-zeta]]).

[F10] $\Gamma$ has simple poles exactly at the nonpositive integers
([[thm-gamma-meromorphic-continuation]]).

[F11] The reciprocal Gamma has the locally uniformly convergent Weierstrass
product
$1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$
([[thm-gamma-weierstrass-product]]).

[F12] $\widetilde W$ is entire, has rapid decay on fixed vertical lines, and
satisfies Mellin inversion
([[lem-mellin-inversion-for-smooth-compact-support]]).

[F13] The residue theorem evaluates an admissible contour integral as the
finite sum of enclosed residues
([[thm-residue-theorem-null-homologous-cycle]]).

[F14] The principal character modulo $q$ is $1$ on integers coprime to $q$
and $0$ otherwise ([[def-principal-dirichlet-character]]).

[F15] Inducing a character from $d\mid q$ agrees with its values on integers
coprime to $q$ and is zero on the others
([[def-induced-dirichlet-character]]).

[F16] $\Lambda(p^k)=\log p$ for prime $p$ and $k\ge1$, and $\Lambda(n)=0$
when $n$ is not a prime power ([[def-von-mangoldt-function]]).

[F17] A Dirichlet character modulo $q$ is a homomorphism on the unit group
$(\mathbb Z/q\mathbb Z)^\times$ extended by zero on nonunits
([[def-dirichlet-character-modulo-q]]).

## Proof

**Proof technique:** direct contour shift.

1.1 On $\operatorname{Re}s>1$, logarithmic differentiation of the absolutely convergent Euler products [F8] and [F9] gives $-\frac{L'}{L}(s,\chi)=\sum_p\sum_{k\ge1}\chi(p)^k(\log p)p^{-ks}=\sum_{n\ge1}\Lambda(n)\chi(n)n^{-s}$. The differentiated double series is locally absolutely convergent because it is bounded on $\operatorname{Re}s\ge\sigma>1$ by $\sum_{n\ge2}(\log n)n^{-\sigma}$; [F16] identifies its prime-power coefficients with $\Lambda(n)$. [F2, F8, F9, F16, given, algebra]

1.2 The product [F11] has simple zeros exactly at the nonpositive integers: each displayed factor gives those zeros, and on a compact set the normalized tail factors are $1+O(n^{-2})$, whose logarithms converge absolutely away from the displayed zeros. Thus its tail is nonzero; together with the simple Gamma poles in [F10], these are exactly the Gamma poles. [F10, F11, given, algebra]

1.3 If $q=1$, [F17] gives the unique character and [F3] identifies it as the primitive principal character, so $L=\zeta$. For $\tau=-2m$, $m\ge1$, [F7] reflects to $1+2m>1$, where [F8] makes the zeta factor nonzero and [F10]–[F11] make the Gamma factor finite and nonzero; the Gamma pole therefore gives a simple zeta zero at each such $\tau$. At $s=0$, the completed zeta pole transfers from $1$ by [F7], and the simple Gamma pole [F10] leaves $\zeta(0)\ne0$. The functional equation and [F8] exclude any other zeros for $\operatorname{Re}s<0$. [F3, F5, F6, F7, F8, F10, F11, F17, given, algebra]

2.1 Apply Mellin inversion [F12] to $W(n/x)$ in [F1]. Since $|\chi(n)|\le1$, [F16] gives $\sum_n\Lambda(n)n^{-c}\le\sum_{n\ge2}(\log n)n^{-c}<\infty$, and [F12] gives $\int_{\mathbb R}|\widetilde W(c+it)|\,dt<\infty$; these bounds justify interchanging the sum and integral, yielding $\psi_W(x,\chi)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}-\frac{L'}{L}(s,\chi)x^s\widetilde W(s)\,ds$. [F1, F12, F16, step 1.1, given, algebra]

2.2 If $q>1$, [F17] gives the unique character modulo $1$ because its unit group has one element; its induction to $q$ is the principal character by [F14] and [F15], so that character is not primitive by [F3] and the given primitive $\chi$ is nonprincipal. At $\tau=-a-2m$, $m\ge0$, parity [F4] places a simple Gamma pole by step 1.2, and the completed-function formula [F5] together with its entireness [F6] forces $L(s,\chi)$ to vanish there; write $m_\tau\ge1$ for its actual multiplicity. If $\tau<0$, reflection to $1-\tau>1$ and [F7]–[F8] make the completed value nonzero, so the Gamma pole in [F5] is canceled by a zero of exactly order one; at $\tau=0$ its multiplicity is retained. At other $s$ with $\operatorname{Re}s<0$, Gamma is finite and nonzero and the reflection is nonzero, so there are no other zeros there; [F8] also excludes zeros for $\operatorname{Re}s>1$. [F3, F4, F5, F6, F7, F8, F10, F11, F14, F15, F17, step 1.2, given, algebra]

3.1 At a zero $\rho$ of multiplicity $m$, local factorization $L(s,\chi)=(s-\rho)^m g(s)$ gives residue $-m$ for $-L'/L$; at the simple pole $s=1$ for $q=1$, writing $L(s,\chi)=(s-1)^{-1}g(s)$ gives residue $+1$. Since $x^s\widetilde W(s)$ is entire by [F12], the residues of $G_{\chi,x,W}$ are $\delta_\chi x\widetilde W(1)$, $-m_\rho x^\rho\widetilde W(\rho)$, and $-m_\tau x^\tau\widetilde W(\tau)$. [step 2.2, step 1.3, F6, F12, algebra]

4.1 Let $I_{c,T}=(2\pi i)^{-1}\int_{c-iT}^{c+iT}G_{\chi,x,W}(s)\,ds$. The positive rectangle has right segment $I_{c,T}$, horizontal contribution $H_T$, and downward left segment $-V_{\alpha,T}$; [F13] and step 3.1 give $I_{c,T}=$ enclosed residue sum $+V_{\alpha,T}-H_T$. By step 2.1 the full right-line integral is $I_{c,T}+U_{c,T}$, so adding the tails yields exactly $\psi_W(x,\chi)=\mathscr E_\chi(x,W;c,\alpha,T)$. [F13, step 2.1, step 3.1, algebra] ∎
