---
id: lem-partial-dedekind-zeta-functional-equation
kind: lemma
title: "Functional equation for partial Dedekind zeta functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-ideal-class-group-of-a-domain
  - def-fractional-ideal
  - def-generated-and-principal-ideals
  - def-partial-dedekind-zeta-function
  - def-completed-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-poisson-summation-for-a-full-rank-lattice
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-dirichlet-unit-theorem
  - thm-logarithmic-unit-image-is-a-full-lattice
  - thm-number-field-regulator-is-well-defined
  - def-number-field-regulator
  - def-logarithmic-unit-embedding
  - def-roots-of-unity-in-a-field
  - lem-roots-of-unity-in-a-number-field-are-finite
  - thm-covolume-of-an-ideal-lattice
  - def-minkowski-embedding-of-a-number-field
  - def-full-rank-lattice-covolume-and-dual-lattice
  - lem-trace-pairing-for-a-finite-separable-extension
  - thm-field-norm-and-trace-by-embeddings
  - def-archimedean-embeddings-and-number-field-signature
  - def-different-of-a-number-field
  - def-trace-dual-and-codifferent-of-a-number-field
  - lem-trace-dual-of-a-fractional-ideal
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-substitution-for-improper-integrals
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-dominated-convergence
  - def-euler-gamma-function
  - thm-exponential-beats-every-polynomial
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Lemmas 5.3–5.8 and Theorem 5.9"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.458–465: ideal-class orbit parametrization, unit fundamental domain, trace-dual lattice, theta transformation, exponential tail and partial-zeta functional equation with residues."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2, Proposition 2.8 and Corollary 2.9"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.189–190: partial ideal-class zeta continuation and residue; used as an independent normalization check."

---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of signature $(r_1,r_2)$, field discriminant $d_K$, regulator $R_K$, and finite group of roots of unity $\mu_K$ of order $w_K$. For an ideal class $C$ of $\mathcal O_K$, let $C':=[\mathfrak D_K]C^{-1}$, where $\mathfrak D_K$ is the different. The completed partial zeta function
$$\Lambda_{K,C}(s):=|d_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_{K,C}(s),\qquad \Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2),\quad \Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s),$$
initially defined for $\operatorname{Re}(s)>1$, has a meromorphic continuation to $\mathbb C$, satisfies
$$\Lambda_{K,C}(s)=\Lambda_{K,C'}(1-s),$$
and has simple poles at $s=0$ and $s=1$ with residues $-2^{r_1+r_2}R_K/w_K$ and $2^{r_1+r_2}R_K/w_K$, respectively, and no other poles.

## Statement references

[[def-number-field]]

[[def-axiom-of-choice]]

[[def-partial-dedekind-zeta-function]]

[[def-completed-dedekind-zeta-function]]

[[def-number-field-regulator]]

[[def-roots-of-unity-in-a-field]]

[[def-different-of-a-number-field]]

## Facts & Assumptions

**Given:** AC; a number field $K$ of degree $n=r_1+2r_2$ and signature $(r_1,r_2)$; its ideal class group, discriminant $d_K$, different $\mathfrak D_K$, regulator $R_K$, and roots-of-unity group $\mu_K$; an ideal class $C$ and its partial zeta function.

[A1] AC implies dependent choice and hence countable choice; the full-rank Poisson theorem and Gaussian transform are used only on this branch ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] The Minkowski embedding sends a number field into $\mathbb R^{r_1}\times\mathbb C^{r_2}$, and the degree and signature satisfy $n=r_1+2r_2$ ([[def-number-field]], [[def-archimedean-embeddings-and-number-field-signature]], [[def-minkowski-embedding-of-a-number-field]]).

[F2] The partial zeta series sums $(N\mathfrak b)^{-s}$ over nonzero integral ideals $\mathfrak b$ in the specified ordinary ideal class, and its absolute convergence for $\operatorname{Re}(s)>1$ follows from the Dedekind zeta Euler-product theorem ([[def-partial-dedekind-zeta-function]], [[thm-dedekind-zeta-euler-product]]).

[F3] The ideal class group is the quotient of nonzero fractional ideals by principal fractional ideals; clearing a denominator gives an integral representative without changing its class. For an integral ideal $\mathfrak a$ representing $C^{-1}$, the map $\alpha\mapsto(\alpha)\mathfrak a^{-1}$ identifies $\mathfrak a\setminus\{0\}$ modulo multiplication by units with the integral ideals in $C$, and $N((\alpha)\mathfrak a^{-1})=|N_{K/\mathbb Q}(\alpha)|/N\mathfrak a$ ([[def-ideal-class-group-of-a-domain]], [[def-fractional-ideal]], [[def-generated-and-principal-ideals]], [[thm-principal-ideal-norm-is-absolute-field-norm]], [[thm-ideal-norm-is-multiplicative]]).

[F4] The logarithmic unit image is a full lattice in $H=\{(x_i)\in\mathbb R^{r_1+r_2}:\sum_i x_i=0\}$ under $\lambda(u)=(\log|\sigma_i u|,2\log|\tau_j u|)$; the regulator is the absolute deleted-row determinant for a lattice basis and is independent of that basis ([[thm-dirichlet-unit-theorem]], [[def-logarithmic-unit-embedding]], [[thm-logarithmic-unit-image-is-a-full-lattice]], [[def-number-field-regulator]], [[thm-number-field-regulator-is-well-defined]]).

[F5] The kernel of the logarithmic embedding on $\mathcal O_K^\times$ is $\mu_K$, and $\mu_K$ is finite with cardinality $w_K$ ([[def-roots-of-unity-in-a-field]], [[lem-roots-of-unity-in-a-number-field-are-finite]]).

[F6] For an integral ideal $\mathfrak a$, the unscaled Minkowski lattice has covolume $2^{-r_2}\sqrt{|d_K|}N\mathfrak a$; multiplying each real coordinate in a complex pair by $\sqrt2$ changes this to $\sqrt{|d_K|}N\mathfrak a$ ([[thm-covolume-of-an-ideal-lattice]], [[def-minkowski-embedding-of-a-number-field]]).

[F7] For the trace pairing, $\mathfrak a^\vee=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(x\mathfrak a)\subseteq\mathbb Z\}=(\mathfrak a\mathfrak D_K)^{-1}$; in the trace-compatible Minkowski inner product the Euclidean dual of $\jmath(\mathfrak a)$ is $*\jmath(\mathfrak a^\vee)$ ([[lem-trace-dual-of-a-fractional-ideal]], [[def-trace-dual-and-codifferent-of-a-number-field]], [[def-different-of-a-number-field]], [[lem-trace-pairing-for-a-finite-separable-extension]], [[thm-field-norm-and-trace-by-embeddings]]).

[F8] For a full-rank lattice $\Gamma$ and a Schwartz function $g$, Poisson summation is $\sum_{x\in\Gamma}g(x)=\operatorname{covol}(\Gamma)^{-1}\sum_{y\in\Gamma^*}\widehat g(y)$; for the Gaussian, $\widehat{e^{-\pi t|x|^2}}(y)=t^{-n/2}e^{-\pi|y|^2/t}$. A positive diagonal quadratic form follows by the linear substitution through its positive square root ([[thm-poisson-summation-for-a-full-rank-lattice]], [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[F9] The Euler gamma integral is $\Gamma(s)=\int_0^\infty e^{-u}u^s\,du/u$ for $\operatorname{Re}(s)>0$; nonnegative sums and integrals may be interchanged by Tonelli, absolutely integrable ones by Fubini, and positive-real substitutions obey the improper-integral substitution theorem ([[def-euler-gamma-function]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-substitution-for-improper-integrals]]).

[F10] The gamma factors are $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$, using positive-real powers ([[def-completed-dedekind-zeta-function]]).

[F11] Exponential decay dominates every polynomial ([[thm-exponential-beats-every-polynomial]]).

[F12] If a full lattice has basis matrix $A$, its dual has basis $A^{-T}$ and covolume $\operatorname{covol}(\Gamma^\#)=\operatorname{covol}(\Gamma)^{-1}$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]).

[F13] Dominated convergence applies to complex-valued functions with one integrable majorant ([[thm-dominated-convergence]]).

## Proof

1.1 Choose an integral ideal $\mathfrak a$ with $[\mathfrak a]=C^{-1}$, possible by clearing a denominator of a fractional representative as in [F3]. If $0\ne\alpha\in\mathfrak a$, then $(\alpha)\mathfrak a^{-1}$ is an integral ideal in $C$. Conversely, if $\mathfrak b$ is an integral ideal in $C$, then $\mathfrak b\mathfrak a=(\alpha)$ for some $0\ne\alpha\in\mathfrak a$; changing $\alpha$ by a unit leaves $\mathfrak b$ unchanged, and equality of the principal ideals is exactly unit association. Multiplicativity of ideal norms and the principal-ideal norm formula give $N\mathfrak b=|N_{K/\mathbb Q}(\alpha)|/N\mathfrak a$. [F2, F3, given, construct]

1.2 Put $m=r_1+r_2$, $w=w_K$, and $S=\{x\in(\mathbb R_{>0})^m:\prod_i x_i^{d_i}=1\}$, where $d_i=1$ at real places and $d_i=2$ at complex places. The map $x\mapsto(\log x_i^{d_i})_i$ identifies $S$ with $H$. For $u\in\mathcal O_K^\times$, set $\rho(u)=(|\sigma_i(u)|^2,|\tau_j(u)|^2)\in S$; the log image of $\rho(\mathcal O_K^\times)$ is $2\lambda(\mathcal O_K^\times)$, so choose a fundamental parallelepiped $F$ for this action. Its kernel is $\mu_K$ of size $w$, so unfolding a unit orbit over $F$ counts it $w$ times. [A1, F4, F5, given, construct]

1.3 Write $\jmath$ for the unscaled Minkowski embedding into $V=\mathbb R^{r_1}\times\mathbb C^{r_2}$, equipped throughout with the inner product $\sum_i u_iv_i+2\sum_j\operatorname{Re}(z_j\overline{w_j})$ and its associated measure $dv=\prod_i du_i\prod_j2\,d\operatorname{Re}z_j\,d\operatorname{Im}z_j$. Scaling the two real coordinates of each complex place by $\sqrt2$ is one isometry from this $V$ to standard Euclidean space; the complex factor is not applied a second time. Normalize Haar measure $d^\times x$ on $S$ by decomposing the canonical product measure $\prod_i d_i\,dy_i/y_i$ under $y_i=x_i t^{1/n}$ as $d^\times x\,dt/t$. In weighted logarithmic coordinates $v_i=d_i\log x_i$, the unit cell is generated by $2\lambda(\mathcal O_K^\times)$, while the radial column is $(d_i/n)_i$ and has coordinate sum $1$. The cofactor expansion of the augmented determinant gives $2^{m-1}$ times the regulator's deleted-row determinant, so $\operatorname{vol}(F)=2^{m-1}R_K$. For an integral ideal $\mathfrak a$, set $d_{\mathfrak a}:=\operatorname{covol}(\jmath(\mathfrak a))^2=|d_K|(N\mathfrak a)^2$ by [F6], and define $f_{\mathfrak a,F}(t):=w^{-1}\int_F\sum_{\alpha\in\mathfrak a}\exp\!\left(-\pi(t/d_{\mathfrak a})^{1/n}Q_x(\alpha)\right)d^\times x$, where $Q_x(\alpha)=\sum_{i\le r_1}x_i|\sigma_i\alpha|^2+2\sum_{j\le r_2}x_{r_1+j}|\tau_j\alpha|^2$. The zero vector contributes $a_0=2^{m-1}R_K/w$. [F1, F4, F5, F6, given, algebra]

1.4 Give $\mathbb R^{r_1}\times\mathbb C^{r_2}$ the positive inner product $\sum_i u_iv_i+2\sum_j\operatorname{Re}(z_j\overline{w_j})$ and write $*$ for coordinatewise complex conjugation. By [F6], $\operatorname{covol}(\jmath(\mathfrak a))=\sqrt{|d_K|}N\mathfrak a$. For $x,y\in K$, the inner product of $\jmath(x)$ with $*\jmath(y)$ is $\operatorname{Tr}_{K/\mathbb Q}(xy)$ by [F7]. In a $\mathbb Z$-basis of $\mathfrak a$, the trace Gram matrix has rational entries and nonzero determinant by nondegeneracy of trace; solving its linear system shows each Euclidean-dual point is $*\jmath(x)$ for a unique $x\in K$, and its integrality condition is exactly $x\in\mathfrak a^\vee$. Thus $\jmath(\mathfrak a)^\#=*\jmath(\mathfrak a^\vee)=*\jmath(\mathfrak b)$ with $\mathfrak b=(\mathfrak a\mathfrak D_K)^{-1}$ by [F7]. Set $d_{\mathfrak b}:=\operatorname{covol}(\jmath(\mathfrak b))^2$; dual-lattice covolumes give $d_{\mathfrak b}=d_{\mathfrak a}^{-1}$ by [F12]. The positive diagonal form $Q_x$ has determinant $\prod_i x_i^{d_i}=1$, and the Gaussian with scale $(t/d_{\mathfrak a})^{1/n}$ has determinant $t/d_{\mathfrak a}$. The CC hypothesis of [F8] follows from [A1]; applying [F8] to this diagonal Gaussian, whose Fourier transform follows by the square-root substitution, gives $\sum_{\alpha\in\mathfrak a}e^{-\pi(1/(td_{\mathfrak a}))^{1/n}Q_x(\alpha)}=t^{1/2}\sum_{\beta\in\mathfrak b}e^{-\pi(t/d_{\mathfrak b})^{1/n}Q_{x^{-1}}(\beta)}$. The covolume factor cancels because $\operatorname{covol}(\jmath(\mathfrak a))=d_{\mathfrak a}^{1/2}$, and the Gaussian is invariant under $*$. [A1, F6, F7, F8, F12, given, algebra]

2.1 Integrate the transformation of step 1.4 over $F$ and change variables $x\mapsto x^{-1}$, which preserves $d^\times x$ and sends $F$ to a fundamental cell for the inverse unit lattice. This gives $f_{\mathfrak a,F}(1/t)=t^{1/2}f_{\mathfrak b,F^{-1}}(t)$. The class of $\mathfrak b^{-1}=\mathfrak a\mathfrak D_K$ is $C^{-1}[\mathfrak D_K]$, so its inverse-class zeta index is $C'=[\mathfrak D_K]C^{-1}$ by step 1.1. [F3, F6, F7, step 1.1, step 1.4, algebra]

2.2 For real $s>1/2$, unfold the $S$-integral into unit orbits using step 1.1: translates of $F$ by $\rho(\mathcal O_K^\times)$ tile $S$, while each unit orbit has exactly $w$ representatives for each translate, canceled by the factor $1/w$ in step 1.3. The scale $d_{\mathfrak a}=|d_K|(N\mathfrak a)^2$ from step 1.3 contributes $|d_K|^s(N\mathfrak a)^{2s}$; the principal-ideal norm in [F3] cancels $(N\mathfrak a)^{2s}$ against $|N_{K/\mathbb Q}(\alpha)|^{2s}$. With $y_i=x_i t^{1/n}$ and $t=\prod_i y_i^{d_i}$, the gamma integral [F9] separates into real factors $\pi^{-s}\Gamma(s)=\Gamma_{\mathbb R}(2s)$ and complex factors $2(2\pi)^{-2s}\Gamma(2s)=\Gamma_{\mathbb C}(2s)$; the factor $2$ at every complex place is supplied by the canonical measure $d_i\,dy_i/y_i$ from step 1.3. Thus each unit orbit contributes its absolute norm to the power $-2s$ times the common archimedean factor, and the orbit bijection of step 1.1 gives $\int_0^\infty(f_{\mathfrak a,F}(t)-a_0)t^s\,dt/t=|d_K|^s\Gamma_{\mathbb R}(2s)^{r_1}\Gamma_{\mathbb C}(2s)^{r_2}\zeta_{K,C}(2s)=\Lambda_{K,C}(2s)$. Tonelli justifies interchanging the nonnegative orbit sum and integral; absolute convergence and holomorphy on $\operatorname{Re}(s)>1/2$ follow from [F2], Fubini, and [F13], since logarithmic derivatives on every closed sub-half-plane are dominated by an ideal-norm series with a slightly smaller exponent. [F2, F3, F6, F9, F10, F13, step 1.1, step 1.2, step 1.3, given]

2.3 The theta sum has constant term $a_0$ and satisfies $f_{\mathfrak a,F}(t)=a_0+O(e^{-c t^{1/n}})$ as $t\to\infty$ for some $c>0$. Choose a lattice basis; its inverse basis map is bounded, so the number of lattice vectors of norm at most $R$ is at most $C(1+R)^n$. The closure of $F$ is compact, so all $x_i$ are bounded below by a positive constant; discreteness gives a positive shortest nonzero length. Grouping the Gaussian terms into integer-radius shells and using [F11] bounds the nonzero terms by $O(e^{-c t^{1/n}})$. The same shell bound gives locally uniform convergence in $t>0$, hence continuity, and applies to $g(t):=f_{\mathfrak b,F^{-1}}(t)$ with the same constant $a_0$, since its unit cell has the same volume. [F6, F11, step 1.3]

3.1 For continuous $f,g$ with $f(t)=a_0+O(e^{-ct^\alpha})$ and $g(t)=a_0+O(e^{-ct^\alpha})$ at infinity and $f(1/t)=t^kg(t)$, define $L(f,s)=\int_0^\infty(f(t)-a_0)t^s\,dt/t$ first for $\operatorname{Re}(s)>k$. Splitting at $1$ and substituting $t\mapsto1/t$ on $(0,1)$ gives $L(f,s)=-a_0/s+a_0/(s-k)+\int_1^\infty((f(t)-a_0)t^s+(g(t)-a_0)t^{k-s})\,dt/t$. Both tails are entire by [F11] and [F13], since every derivative introduces only a power of $\log t$ and exponential decay dominates it. The same formula for $g$, using $g(1/t)=t^kf(t)$, gives $L(f,s)=L(g,k-s)$; only simple poles at $0,k$ occur, with residues $-a_0,a_0$. Apply this with $k=1/2$ to the theta relation in step 2.1; step 2.2 identifies the Mellin integrals with completed partial zeta functions, and step 2.3 supplies the required decay. [F9, F11, F13, step 2.1, step 2.2, step 2.3, algebra]

4.1 Replacing the Mellin parameter $s$ by $s/2$ in step 3.1 proves $\Lambda_{K,C}(s)=\Lambda_{K,C'}(1-s)$. Its residues are $-2a_0$ at $s=0$ and $2a_0$ at $s=1$ because the change of variable doubles residues. Substituting $a_0=2^{m-1}R_K/w_K$ from step 1.3 gives the stated residues, and the entire tail integral in step 3.1 shows there are no other poles. [step 1.3, step 2.2, step 3.1, algebra] ∎ 