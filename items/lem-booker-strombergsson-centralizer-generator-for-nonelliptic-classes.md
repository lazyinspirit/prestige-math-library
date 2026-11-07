---
id: lem-booker-strombergsson-centralizer-generator-for-nonelliptic-classes
kind: lemma
title: Booker–Strömbergsson Centralizer Generator for Nonelliptic Classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-booker-strombergsson-general-trace-formula-notation
  - thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
proof_strategy: centralizer-structure-and-fundamental-domain
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.1, Proposition 2.2 and the remark following equation (2.21): normal forms (2.1), canonical polygon and cusp truncation (2.2)–(2.4), primitive centralizer generator and independence of the orbital ratio."
---

## Statement

Let $\Gamma$ and $\mathcal M$ be as in the preceding general trace-formula
notation definition. For each nonelliptic $\Gamma$-conjugacy class
$\{T\}\subset\mathcal M$, there is a hyperbolic element or glide reflection
$T_0\in Z_\Gamma(T)$ such that the cyclic subgroup
$[T_0]=\{T_0^m:m\in\mathbb Z\}$ has index $1$, $2$, or $4$ in
$Z_\Gamma(T)$. The ratio
$$\frac{\log N(T_0)}{[Z_\Gamma(T):[T_0]]}$$
is independent of the choice of such $T_0$.

## Statement references

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

## Facts & Assumptions

**Given:** The group and canonical fundamental-domain/cusp data in the
Statement, and a nonelliptic class represented by $T\in\mathcal M$.
Here the nonelliptic types are hyperbolic elements, glide reflections and
reflections.

[F1] The group $\Gamma<\operatorname{PGL}_2(\mathbb R)$ is discrete;
$\Gamma^+$ has index two. The chosen canonical domain $F$, cusp
neighborhoods $C_j(Y)$ and truncation $F_Y$, the definition of
$\mathcal M$, the three nonelliptic normal forms, and $N$ are those of
[[def-booker-strombergsson-general-trace-formula-notation]]. These are the geometric and matrix inputs used below.

[F2] A cofinite discrete subgroup of $\operatorname{PSL}_2(\mathbb R)$ has
finitely many cusp classes with mutually disjoint translated standard
horoballs and a compact set covering their complement modulo the group.
This includes elliptic torsion and the case of no cusps.
[[thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations]]

## Proof

1.1 Write $D(a)=\begin{pmatrix}a&0\\0&1\end{pmatrix}$ and $B(b)=\begin{pmatrix}0&b\\1&0\end{pmatrix}$ for $a,b\in\mathbb R^\times$, always as projective matrices. A discrete subgroup meets every compact subset of $G$ in finitely many points: choose an identity neighborhood $U$ meeting it only in the identity and a neighborhood $W$ with $W^{-1}W\subset U$; each translate of $W$ contains at most one subgroup element, and finitely many translates cover a compact set. After conjugating $T$ to $D(t)$, projective commutation of a matrix $A$ with $D(t)$ means $AD(t)=\lambda D(t)A$. Determinants give $\lambda=\pm1$. For $\lambda=1$ and $t\ne1$, the off-diagonal entries of $A$ vanish; for $\lambda=-1$, invertibility forces $t=-1$ and the diagonal entries vanish. Consequently $Z_G(D(t))=\{D(a)\}$ when $|t|>1$, whereas $Z_G(D(-1))=\{D(a)\}\cup\{B(b)\}$. Direct multiplication gives $B(b)^2=I$, $B(b)D(a)B(b)^{-1}=D(a^{-1})$ and $B(b_1)B(b_2)=D(b_1/b_2)$. [F1, given, algebra]

1.2 The subgroup $\Gamma^+$ is discrete and has finite quotient area: if $E$ is a measurable fundamental region for $\Gamma$, its two coset translates give a fundamental region for $\Gamma^+$, up to boundary sets of area zero, so the area is twice that for $\Gamma$. Apply [F2] to $\Delta=\Gamma^+$. It supplies finitely many pairwise disjoint open cusp horoballs and all their distinct $\Gamma^+$-translates, together with a compact $K\subset\mathbb H$ satisfying $\mathbb H\setminus\bigcup_{\gamma\in\Gamma^+,j}\gamma H_j\subseteq\Gamma^+K$. These cusp classes are all the $\Gamma^+$-cusps in [F1]. In the absence of cusps this says $\Gamma^+K=\mathbb H$. This geometric input is independent of the chosen notation domain $F$ and does not require an interpretation of the word canonical. [F1, F2, construct, algebra]

2.1 Suppose $T$ is a reflection and put $L=\operatorname{Fix}(T)$ and $C=Z_\Gamma(T)$. The reflections fixing at least one point of any compact $K'\subset\mathbb H$ belong to a compact subset of $G$. Indeed, $h_z=\begin{pmatrix}\sqrt y&x/\sqrt y\\0&1/\sqrt y\end{pmatrix}$ sends $i$ to $z=x+iy$, and these reflections are $h_z k(\theta)D(-1)k(\theta)^{-1}h_z^{-1}$, with $z\in K'$ and $0\le\theta\le\pi$; this is a compact matrix family. By step 1.1 only finitely many of them belong to $\Gamma$. For each reflection $R$ among the conjugates $\gamma T\gamma^{-1}$ fixing $K'$, choose one such $\gamma_R$. Whenever $z\in L$ and $\gamma z\in K'$, the reflection $\gamma T\gamma^{-1}$ is one of these $R$, and $c=\gamma_R^{-1}\gamma$ lies in $C$. Hence $z\in c^{-1}\gamma_R^{-1}K'$. If $C$ were finite, $L\cap\Gamma K'$ would therefore be contained in a finite union of compact sets, so would be bounded along $L$. Apply this to the compact $K$ of step 1.2. A sufficiently far forward geodesic ray of $L$ then misses $\Gamma^+K$, and lies in the union of the pairwise disjoint open cusp horoballs. Its connectedness puts the entire ray in one such horoball. A horoball has exactly one point on the ideal boundary, so that point is the ideal endpoint of the ray; it is a $\Gamma^+$-cusp. Since $T$ fixes $L$ pointwise, it fixes this cusp, contradicting $T\in\mathcal M$. If there are no cusps, step 1.2 already makes such an escaping ray impossible. Thus $C$ is infinite. [F1, step 1.1, step 1.2, choose, algebra]

3.1 Continue with a reflection, conjugated to $D(-1)$, and set $C_D=C\cap\{D(a)\}$. By step 1.1, $[C:C_D]=e\in\{1,2\}$, so step 2.1 makes $C_D$ infinite. The additive subgroup $\Lambda=\{s\in\mathbb R:D(e^s)\in C_D\}$ is discrete, because $D(e^s)\to I$ as $s\to0$ and $\Gamma$ is discrete. It is nonzero: otherwise multiplication by $T=D(-1)\in C_D$ would give $C_D=\{I,T\}$. A nonzero additive subgroup with zero isolated is $\ell\mathbb Z$ for some $\ell>0$. For completeness, an isolation radius gives a positive separation of any two distinct subgroup elements; a finite interval containing a positive element therefore contains only finitely many, so has a least positive element $\ell$, and division by $\ell$ with remainder in $[0,\ell)$ shows every element is an integer multiple of $\ell$. Multiplication by $T$ now gives $C_D=\{D(\pm e^{n\ell}):n\in\mathbb Z\}$. Thus the hyperbolic $T_0=D(e^\ell)$ has index $2e\in\{2,4\}$ in $C$. Both the absent and present antidiagonal coset are included. [F1, step 1.1, step 2.1, algebra]

4.1 Every hyperbolic element or glide reflection $U\in C$ is diagonal: each antidiagonal element has order two. Thus $U=D(\varepsilon e^{m\ell})$ for $\varepsilon\in\{1,-1\}$ and a nonzero integer $m$. Its powers have logarithmic absolute diagonal coordinate in $m\ell\mathbb Z$, and there are exactly two cosets in each logarithmic residue class modulo $|m|\ell$ in $C_D/\langle U\rangle$: the two signs cannot coincide because the only power of $U$ with zero logarithmic coordinate is $I$. Hence $[C_D:\langle U\rangle]=2|m|$ and $[C:\langle U\rangle]=2e|m|$. Conjugating $D(a)$ by $B(1)$ replaces $a$ by $a^{-1}$, so the defining normal form gives $\log N(U)=|m|\ell$ for either sign and either direction. The required ratio is consequently $\ell/(2e)$ for every such $U$. [F1, step 1.1, step 3.1, algebra]

4.2 Now let $T$ be hyperbolic or a glide reflection and conjugate it to $D(t)$ with $|t|>1$. Step 1.1 gives $C=Z_\Gamma(T)\subseteq\{D(a)\}$. The homomorphism $p:C\to\mathbb R$, $p(D(a))=\log|a|$, has kernel of order $k\in\{1,2\}$. Its image is discrete: if nonzero $p(D(a))$ could be arbitrarily small, then $D(a)^2=D(e^{2p(D(a))})$ would be a nonidentity element arbitrarily close to $I$, contradicting discreteness. The image is nonzero since $T\in C$ and $p(T)\ne0$. The elementary additive-subgroup argument in step 3.1 therefore gives $p(C)=\ell\mathbb Z$ for some $\ell>0$. Choose $T_0\in C$ with $p(T_0)=\ell$. This is hyperbolic or a glide reflection. Every $c\in C$ is uniquely $vT_0^n$ with $v\in\ker p$ and $n\in\mathbb Z$, so $[C:\langle T_0\rangle]=k\in\{1,2\}$. The primitive generator may itself reverse orientation. [F1, step 1.1, step 3.1, choose, algebra]

5.1 For any hyperbolic element or glide reflection $U\in C$, write $p(U)=m\ell$ with $m\ne0$. Reducing $p(c)$ modulo $m\ell$ leaves $|m|$ residue classes, each with $k$ cosets of $\langle U\rangle$: the intersection of $\langle U\rangle$ with $\ker p$ is trivial. Thus $[C:\langle U\rangle]=k|m|$ and $\log N(U)=|m|\ell$, so the ratio is $\ell/k$, independently of $U$. Together with steps 3.1 and 4.1 this proves the existence of an index $1$, $2$ or $4$ cyclic subgroup in all three nonelliptic cases and the asserted choice independence. [F1, step 3.1, step 4.1, step 4.2, algebra] ∎

## Source notes

The published normal forms (2.1), cusp setup (2.2)–(2.4),
Proposition 2.2 and its following ratio remark were read in the cached full
Booker–Strömbergsson text. The hyperbolic and glide-reflection computations
omitted there are supplied above. The reflection proof above uses compact
the explicit local cofinite cusp-truncation supplier and local finiteness of
conjugate reflection matrices in place of
the published positive-kernel integral argument; it does not import a trace
formula, scattering result or finite computation.
