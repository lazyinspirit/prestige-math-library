---
id: pthm-st-open-oldcovariant-brst-equivalence
kind: physics-theorem
title: "Open Oldcovariant BRST Equivalence"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 12
deps:
  - def-st-bosonic-covariant-state-space
  - def-st-bosonic-brst-complex
  - pthm-st-bosonic-brst-nilpotence
  - def-st-bosonic-matter-oscillator-modes
  - pthm-st-nonzero-momentum-pplus-chart
dependency_roles:
  def-st-bosonic-covariant-state-space: formulation-prerequisite
  def-st-bosonic-brst-complex: formulation-prerequisite
  pthm-st-bosonic-brst-nilpotence: physical-result
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  pthm-st-nonzero-momentum-pplus-chart: physical-result
physical_scope: "The open-string old-covariant quotient and ghost-number-one relative BRST cohomology at D=26, intercept one, fixed on-shell nonzero momentum in a p^+ nonzero proof chart; the comparison is the natural ghost-vacuum representative map and preserves the Hermitian physical form."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "pp. 2–5; relative BRST/no-ghost discussion, but not the claimed old-covariant quotient isomorphism. The Kato–Ogawa full article was not retrieved in the inherited source history."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the standard critical flat open bosonic string with $D=26$ and $a=1$, fixed on-shell momentum in a light-cone proof chart with $p^+$ nonzero, the old-covariant quotient $P_N(p)/Rad(P_N(p))$ is isomorphic, with its induced Hermitian physical form $h_{\mathrm{rel}}$, to the ghost-number-one relative BRST cohomology $H_{\mathrm{rel}}^1(p)$ defined in def-st-bosonic-brst-complex.

## Statement references

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), pp. 2–5; relative BRST/no-ghost discussion, but not the claimed old-covariant quotient isomorphism. The Kato–Ogawa full article was not retrieved in the inherited source history.

## Facts & Assumptions

**Given:** The standard critical flat open bosonic string at $D=26$, $a=1$, fixed nonzero on-shell real momentum, and a $k^+\ne0$ frame. Work in each finite oscillator level of the algebraic relative complex, with the BRST cubic sum ordered relative to $|\downarrow\rangle=c_1|0\rangle$ as in the corrected supplier.

[F1] [[def-st-bosonic-brst-complex]] fixes $Q_B$, the relative complex, the Hermitian Krein adjoint and $c_0$-inserted candidate form, including the relative-vacuum cubic ordering.

[F2] [[pthm-st-bosonic-brst-nilpotence]] gives $Q_B^2=0$ at $D=26,a=1$.

[F3] [[def-st-bosonic-covariant-state-space]] fixes $P_N$, its ambient oscillator form and radical quotient.

[F4] [[def-st-bosonic-matter-oscillator-modes]] fixes the oscillator algebra, real momentum, adjoints and finite-particle domain.

[F5] [[pthm-st-nonzero-momentum-pplus-chart]] gives the $p^+\ne0$ chart and form-preserving spatial-rotation transport for every nonzero momentum.

## Proof

1.1 In the target $M=\mathbb R^{1,25}$, define $X^\pm=(X^0\pm X^{25})/\sqrt2$, $p^\pm=(p^0\pm p^{25})/\sqrt2$, and $\alpha_n^\pm=(\alpha_n^0\pm\alpha_n^{25})/\sqrt2$, with transverse indices $i=1,\ldots,24$; then $\eta_{+-}=-1$ and $[\alpha_m^+,\alpha_n^-]=-m\delta_{m+n,0}$. Set $k^\mu=\sqrt{2\alpha'}p^\mu$ and work in the target momentum chart $p^+\ne0$ (equivalently $k^+\ne0$); no world-sheet gauge condition is imposed in this BRST comparison. Work at $D=26,a=1$, real fixed $k$ with $k^+\ne0$. Let $\mathcal C_N(k)$ be the relative algebraic subspace generated over $|k\rangle|\downarrow\rangle$ by negative-index matter modes and $b_{-n},c_{-n}$, $n>0$, of total oscillator level $N$. Its zero-mode equation is $L_0^{tot}=k^2/2+N-1=0$. This space is finite dimensional, in all ghost numbers, and the relative differential $d$ is $Q_B$ with its $c_0,b_0$ terms removed. Nilpotence gives $d^2=0$ on this on-shell subspace. Assign degrees $\deg\alpha_n^+=\deg c_n=1$, $\deg\alpha_n^-=\deg b_n=-1$, $\deg\alpha_n^i=0$; the relative vacuum has degree zero. At fixed level this degree is bounded above and below. Expanding the quadratic matter Virasoro modes and the cubic ghost term gives $d=d_0+\delta,\qquad d_0=-k^+\sum_{n\ne0}c_{-n}\alpha_n^-,$ where every term of $\delta$ raises degree by one or two. Explicitly the degree-one terms are $c$ times the transverse quadratic and $\alpha^+\alpha^-$ quadratic terms, the transverse momentum term, and $ccb$; the degree-two term is $-k^-\sum c_{-n}\alpha_n^+$. All preserve total level. This includes nonzero transverse momentum; it need not be set to zero. Every sum is locally finite. [given, F1, F2, F4]

1.2 The dagger in the existing definition is the antilinear Krein adjoint. The real-momentum charge is Hermitian: the matter term pairs index $n$ with $-n$, the cubic term does so after the CAR reversal, and its zero-mode coefficient is real. In the decomposition $Q_B=c_0L_0^{tot}-b_0M+d$ all three displayed terms are separately Hermitian; $d^\dagger=d$ and $\{d,c_0\}=0$. Therefore for relative $\chi$ and closed $\psi$, $\langle d\chi,c_0\psi\rangle_K=\langle\chi,d c_0\psi\rangle_K=-\langle\chi,c_0d\psi\rangle_K=0.$ Thus exact vectors are orthogonal to all closed vectors for $h_{rel}$, and the form descends. No BPZ form is substituted here.  [given, F1, F2]

2.1 Define $K=\frac1{k^+}\sum_{n\ne0}\frac{\alpha_{-n}^+b_n}{|n|}.$ The CAR and oscillator relations give $\{d_0,K\}=\mathcal N=\sum_{n>0}\left[-\frac{\alpha_{-n}^+\alpha_n^-+\alpha_{-n}^-\alpha_n^+}{n}+c_{-n}b_n+b_{-n}c_n\right].$ For clarity the two un-normal-ordered contributions are $\sum_{n\ne0}\operatorname{sgn}(n)c_{-n}b_n$ and $-\sum_{n\ne0}|n|^{-1}\alpha_{-n}^+\alpha_n^-$; their constants cancel when the negative indices are moved to down-vacuum normal order. Commuting $\mathcal N$ with each of $\alpha_{-n}^+,\alpha_{-n}^-,c_{-n},b_{-n}$ gives that same creator. Its value on the vacuum is zero. Thus its eigenvalue is exactly the total number of these four kinds of creators, a nonnegative integer, and its kernel is precisely the transverse oscillator space $\mathcal T_N(k)|\downarrow\rangle$. Its ghost number is exactly one. Also $d_0^2=K^2=0$ and $[\mathcal N,d_0]=[\mathcal N,K]=0$. Let $\iota:\mathcal T_N\to\mathcal C_N$ be inclusion and $\pi$ the projection onto $\mathcal N=0$. Set $h=K/\mathcal N$ on positive eigenspaces and $h=0$ on the kernel. Then $d_0h+hd_0=1-\iota\pi,\qquad h^2=0,\qquad \pi h=h\iota=0.$ In particular $H(d_0)=\mathcal T_N$, in ghost number one and in no other ghost number. This is a complete finite-level contraction; $1/n$ rather than $1/|n|$ would not give a nonnegative count and is not used. [F1, F4, step 1.1, algebra]

3.1 The operator $h\delta$ strictly raises degree, hence is nilpotent on this finite-level space. Define the finite sums $I=(1+h\delta)^{-1}\iota=\sum_{r\ge0}(-h\delta)^r\iota,\qquad U=I\pi+d h+h d_0.$ One has $\pi\delta I=0$: $I$ has leading degree zero and strictly positive higher degrees, $\delta$ raises degree, whereas $\pi$ has image only in degree zero. From $I=\iota-h\delta I$, the contraction identity and $d_0\delta+\delta d_0+\delta^2=0$ give $(1+h\delta)dI=\iota\pi\delta I=0.$ Thus $dI=0$. Moreover $U=1+(I-\iota)\pi+\delta h$ differs from the identity by a strictly degree-raising operator. Its inverse is a finite geometric sum. Direct multiplication, using $d^2=d_0^2=0$, gives $dU=d h d_0=U d_0.$ This is an actual invertible similarity $U^{-1}dU=d_0$ on every on-shell finite-level relative complex, with no term described merely as trivial on physical states. In particular $U\iota=I$ identifies the complete relative cohomology with $\mathcal T_N$ in ghost number one, all other relative ghost numbers being zero. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The vacuum value is $\langle\downarrow|c_0|\downarrow\rangle_K=\langle0|c_{-1}c_0c_1|0\rangle_K=1$. In the relative oscillator basis, a nonzero Krein contraction pairs $\alpha^+$ with $\alpha^-$ and $c$ with $b$. Dagger preserves the declared degree. Consequently two homogeneous vectors have zero $c_0$ pairing unless their degrees sum to zero. Every $It$ is $t|\downarrow\rangle$ plus strictly positive-degree terms. It follows exactly that $h_{rel}([It],[Is])=\langle t,s\rangle_{\mathrm{transverse}}.$ The transverse Heisenberg norm is positive definite: a monomial with occupation numbers $r_{n,i}$ has squared norm $\prod_{n,i}n^{r_{n,i}}r_{n,i}!$, and distinct normalized occupation monomials are orthogonal. This proves relative BRST positivity in all levels without claiming that $U$ is unitary on the ambient Krein space.  [F1, F4, step 1.2, step 3.1, algebra]

4.2 There is also a ghost-free choice of these representatives.  Let $\mathcal F^+$ be the matter subspace generated only by transverse and $\alpha_{-n}^+$ creators. For $v\in\mathcal F^+$, the relative charge on $v|\downarrow\rangle$ is $\sum_{n>0}c_{-n}L_n^m v|\downarrow\rangle$. The positive-mode ghost cubic annihilates the down vacuum. Both $d_0$ and this expression have matter coefficients still in $\mathcal F^+$: a positive $\alpha^-$ can contract a plus creator, while a remaining positive $\alpha^+$ annihilates the whole subspace. Applying $h$ contracts each $c_{-n}$ with $b_n$ and inserts $\alpha_{-n}^+$; the other half of $K$ has a positive $\alpha^+$ and vanishes. Dividing by the diagonal count $\mathcal N$ changes neither matter nor ghost support. Hence $I$ maps every transverse $t$ to $v_t|\downarrow\rangle$ with $v_t\in\mathcal F^+$, and its zero-plus-oscillator part is exactly $t$. Since $dI=0$, independence of the $c_{-n}$ ghost states gives $L_n^m v_t=0$ for every $n>0$. Its level and on-shell equation give $(L_0^m-1)v_t=0$. Thus $v_t$ is an old-covariant physical representative. [F1, F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 For every old-covariant physical matter vector $v\in P_N(p)$ define $j(v)=v|\downarrow\rangle$. The same explicit charge action shows that this is relative closed; no extra ghost correction is required. Its pairing is exactly $h_{rel}([j(v)],[j(w)])=\langle v,w\rangle_K.$ Step4 shows that every BRST class is $[j(v_t)]$, so the map $j:P_N\to H_{rel}^1$ is surjective. If $j(v)$ is exact, the descent identity makes its pairing with every $j(w)$ zero, so $v\in\operatorname{Rad}(P_N)$. Conversely, if $v$ is in that radical, its class pairs to zero with every BRST class by surjectivity. Positive definiteness established in step4 implies $[j(v)]=0$. Thus $\ker j=\operatorname{Rad}(P_N),\qquad P_N/\operatorname{Rad}(P_N)\xrightarrow{\sim}H_{rel}^1$ is the actual natural isometric bijection. It proves old-covariant positivity as well as BRST positivity; none is assumed to prove another. Each level includes $N=0$, and every nonzero momentum is covered by the existing spatial-rotation $p^+\ne0$ chart supplier. Real spatial rotations preserve all commutators, adjoints, vacuum pairings and the relative map, transporting the result back. The excluded $p=0$ sector is not added; no closed-string claim or infinite-level convergence is used. [F1, F3, F5, step 1.2, step 4.1, step 4.2, algebra] ∎
