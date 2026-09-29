---
id: cor-positive-negative-part-and-truncation-calculus-in-w-one-p
kind: corollary
title: Positive, negative, and truncated Sobolev functions
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-positive-and-negative-parts-of-a-function, lem-weak-derivative-linearity-locality-and-commutation, thm-sobolev-chain-rule-for-c-one-lipschitz-compositions, lem-weak-stability-of-sobolev-derivatives, thm-dominated-convergence, lem-classical-derivatives-are-weak-derivatives, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-over-a-measurable-set, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-derivative, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice, def-calligraphic-l-p-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-composition-with-borel-functions-preserves-measurability, lem-weak-derivative-is-independent-of-lp-representatives]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §§1.1 and 1.4–1.5; Chapter 2 §2.2, Theorem 2.3, printed pp. 29–31 (gradient rules for u^±, |u| and truncations by smooth approximation and dominated convergence)
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.5 (weak derivatives, Sobolev spaces, composition and corner operations)
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: Chapter 8 §8.2, Examples (i)–(ii), printed pp. 202–203 (absolute value and truncation, stated as exercises without proof)
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §§1.1 and 1.4–1.5 for the
  weak derivative and Sobolev conventions, and Chapter 2 §2.2, Theorem 2.3
  (printed pp. 29–31), where $u^\pm$, $|u|$ and the truncations are treated
  by a smooth approximation of the corner maps together with dominated
  convergence and the a.e. values on the level sets.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3,
  §§3.1–3.5, for the weak-derivative integration-by-parts convention and the
  Sobolev-space conventions of PDE-11.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2, Examples (i)–(ii), printed pp. 202–203, states
  the absolute-value and truncation rules as exercises. The proof below is
  reconstructed from the library interfaces cited in the Facts block and
  does not import those statements.

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, let $1\le p\le\infty$, let $u\in W^{1,p}(\Omega;\mathbb R)$ be a
real Sobolev class, and let $M\ge0$. On measurable representatives define
$$u^+:=\max\{u,0\},\qquad u^-:=\max\{-u,0\},\qquad |u|:=\max\{u,-u\},$$
$$\operatorname{sgn}(u):=1_{\{u>0\}}-1_{\{u<0\}},\qquad T_Mu:=\min\{M,\max\{-M,u\}\}.$$
The resulting almost-everywhere classes are well defined. Then:

1. $u^+$, $u^-$, $|u|$ and $T_Mu$ belong to $W^{1,p}(\Omega)$, and for
   every $i\in\{1,\ldots,n\}$, almost everywhere on $\Omega$,
   $$D_iu^+=1_{\{u>0\}}D_iu,\qquad D_iu^-=-1_{\{u<0\}}D_iu,$$
   $$D_i|u|=\operatorname{sgn}(u)\,D_iu,\qquad D_iT_Mu=1_{\{|u|<M\}}D_iu.$$
2. The two level sets behave as promised: $D_iu=0$ almost everywhere on
   $\{u=0\}$, and $D_iT_Mu$ vanishes almost everywhere on $\{u=M\}$ and on
   $\{u=-M\}$, so the two indicator conventions for $T_Mu$ agree.

If $\Omega=\varnothing$, the only class is the zero class and every
assertion holds vacuously. The exponents $p=1$ and $p=\infty$ are included,
$M=0$ gives $T_0u=0$, and no assertion is made about the pointwise
derivative of an arbitrary representative of $u$.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p\le\infty$; a real class $u\in W^{1,p}(\Omega;\mathbb R)$; a level $M\ge0$; and the pointwise operations of the Statement, applied to measurable representatives.

[F1] $W^{1,p}(\Omega;\mathbb K)$ is the set of classes $u\in L^p(\Omega;\mathbb K)$ such that for every first-order multi-index there is an $L^p$ class with a locally integrable representative satisfying the signed test identity for every test function, and each such derivative determines one class $D_iu$; for open $U$ with $\overline U$ compact and contained in $\Omega$, $W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ means that the restriction of the class belongs to $W^{1,p}(U;\mathbb K)$ for every such $U$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] For a function $f$ one has $f^+=\max\{f,0\}$, $f^-=\max\{-f,0\}$, $f=f^+-f^-$ and $|f|=f^++f^-$ pointwise ([[def-positive-and-negative-parts-of-a-function]]).

[F3] Assume Countable Choice. Weak differentiation is linear wherever the derivatives exist, and it passes to open subsets: if $v=D^\alpha u$ weakly on $\Omega$ and $V\subseteq\Omega$ is open, then $v|_V=D^\alpha(u|_V)$ weakly on $V$; if also $v_j=D^\alpha u_j$ weakly for $j=1,2$ and $a,b\in\mathbb C$, then $av_1+bv_2=D^\alpha(au_1+bu_2)$ weakly ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F4] Assume the Axiom of Choice. For $u\in W^{1,p}(U;\mathbb R)$ with $U$ open and $F\in C^1(\mathbb R;\mathbb R)$ satisfying $\|F'\|_\infty<\infty$, one has $F\circ u\in W^{1,p}_{\mathrm{loc}}(U)$ with $D_i(F\circ u)=F'(u)D_iu$ almost everywhere, and $F\circ u\in W^{1,p}(U)$ if and only if $F(u)\in L^p(U)$ ([[thm-sobolev-chain-rule-for-c-one-lipschitz-compositions]]).

[F5] Assume Countable Choice. If $u_j\to u$ in $L^p_{\mathrm{loc}}(\Omega)$ and $v_j\to v$ in $L^q_{\mathrm{loc}}(\Omega)$ for exponents $1\le p,q\le\infty$, and each $v_j$ is a weak $\alpha$-derivative of $u_j$, then $v=D^\alpha u$ weakly on $\Omega$ ([[lem-weak-stability-of-sobolev-derivatives]]).

[F6] If $f_k\to f$ almost everywhere and $|f_k|\le g$ almost everywhere for one nonnegative measurable $g$ with $\int g\,d\mu<+\infty$, then $\int|f_k-f|\,d\mu\to0$ ([[thm-dominated-convergence]]).

[F7] Assume Countable Choice. A function whose real and imaginary parts are of class $C^k$ has its classical derivatives as weak derivatives, so in particular the constant class has weak derivative zero ([[lem-classical-derivatives-are-weak-derivatives]]).

[F8] If $\mu(X)<\infty$ and $1\le p<r<\infty$, then $\mathcal L^r(\mu)\subseteq\mathcal L^p(\mu)$ with $\|f\|_p\le\mu(X)^{1/p-1/r}\|f\|_r$; and if $1\le p<\infty$ and $f\in L^\infty(\mu)$, then $f\in\mathcal L^p(\mu)$ with $\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F9] Assume Countable Choice. Every bounded measurable subset of $\mathbb R^n$ has finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F10] For nonnegative measurable $f\le g$ one has $\int f\le\int g$, and $\int cf=c\int f$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F11] Integration over a measurable set is integration of the function multiplied by the indicator of that set ([[def-integral-over-a-measurable-set]]).

[F12] For $n\ge1$ the function $x\mapsto x^n$ is differentiable everywhere with derivative $n x^{n-1}$, and polynomial functions are differentiable everywhere with the term-by-term derivative ([[lem-derivative-of-a-power]]).

[F13] Sums, scalar multiples and products of functions differentiable at a point are differentiable there, with the usual derivative formulas ([[thm-algebra-of-derivatives]]).

[F14] Differentiability of a real function at a point means that its difference quotient has the stated derivative as limit; at a point where two pieces meet, the two one-sided difference quotients compute the two one-sided derivatives ([[def-derivative]]).

[F15] In ZF the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F16] The Axiom of Choice asserts a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F17] For $0<p<\infty$, the class $\mathcal L^p(\mu)$ consists of the measurable $f$ with $\int|f|^p\,d\mu<\infty$ ([[def-calligraphic-l-p-on-a-measure-space]]).

[F18] For $0<p<\infty$ and for $p=\infty$, the space $L^p(\mu)$ is the quotient of $\mathcal L^p(\mu)$ respectively $L^\infty(\mu)$ by the almost-everywhere-zero functions, so its elements are almost-everywhere classes and coincide when representatives agree almost everywhere ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F19] $L^\infty(\mu)$ is the class of essentially bounded measurable real functions ([[def-l-infinity-on-a-measure-space]]).

[F20] If $\|f\|_\infty<\infty$, then $|f|\le\|f\|_\infty$ almost everywhere, and if $|f|\le M$ almost everywhere then $\|f\|_\infty\le M$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F21] Pointwise maxima, minima, absolute values, sums, scalar multiples and products of measurable real functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F22] If $f$ is measurable and $g$ is Borel measurable on its codomain, then $g\circ f$ is measurable; in particular compositions of measurable functions with continuous functions are measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F23] Changing locally integrable representatives on a null set preserves the weak-derivative relation, and $L^p$ objects are almost-everywhere classes, so the derivative classes below are independent of all representative choices ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

**Choice accounting:** The declared principle is the Axiom of Choice [F16]. By [F15] it supplies Countable Choice for the linearity/locality lemma [F3], the stability lemma [F5], the classical-derivative lemma [F7], the finite-measure property [F9] and representative independence [F23], while the chain rule [F4] is stated under the Axiom of Choice itself. The proof selects finitely many representatives only, and the approximation runs over the single sequence $\varepsilon_k=1/k$; no further choice is used.

## Proof

**Proof technique:** direct: approximate the Lipschitz corner maps by $C^1$ functions with controlled derivatives, identify the weak derivatives of the limits by weak stability, and recover the remaining operations by linearity and level-set bookkeeping.

1.1 By [F15] and [F16] the Axiom of Choice yields Countable Choice and Dependent Choice in ZF, so the choice hypotheses of [F3], [F5], [F7], [F9] and [F23] are in force, while [F4] is stated under the Axiom of Choice itself. Representatives of $u$ and of $D_iu$ are measurable and finite almost everywhere by [F17]–[F19]; the functions $u^+$, $u^-$, $|u|$, $\operatorname{sgn}(u)$, $1_{\{u>0\}}$, $1_{\{u<0\}}$, $1_{\{|u|<M\}}$ and $T_Mu$ are measurable by [F2], [F21] and [F22], because $\operatorname{sgn}$, the indicators and $T_M$ are Borel functions of a measurable function; and by [F18] and [F23] every class formed below is independent of the chosen representatives. [F2, F3, F4, F5, F7, F9, F15, F16, F17, F18, F19, F21, F22, F23, given]

1.2 The corner family. For $\varepsilon>0$ define $P_\varepsilon:\mathbb R\to\mathbb R$ by $P_\varepsilon(t):=0$ for $t\le0$, $P_\varepsilon(t):=t^2/(2\varepsilon)$ for $0\le t\le\varepsilon$, and $P_\varepsilon(t):=t-\varepsilon/2$ for $t\ge\varepsilon$. On each of the three closed pieces $P_\varepsilon$ is a polynomial function, so [F12] and [F13] make it differentiable at every interior point with $P_\varepsilon'(t)=0$ for $t<0$, $P_\varepsilon'(t)=t/\varepsilon$ for $0<t<\varepsilon$ and $P_\varepsilon'(t)=1$ for $t>\varepsilon$; at the junction $t=0$ the two one-sided difference quotients are identically $0$ on the left and $h/(2\varepsilon)$ on the right, with limits $0$ and $0$, and at $t=\varepsilon$ they are $1+h/(2\varepsilon)$ on the left and $1$ on the right, with limits $1$ and $1$, so [F14] gives differentiability at both junctions with the same formula; the derivative is continuous there since $t/\varepsilon\to0$ and $t/\varepsilon\to1$. Hence $P_\varepsilon\in C^1(\mathbb R)$ with $0\le P_\varepsilon'\le1$, the pointwise bounds $0\le P_\varepsilon(t)\le t^+\le|t|$ and $|P_\varepsilon(t)-t^+|\le\varepsilon/2$ hold for every real $t$, and $P_\varepsilon'(t)\to1_{\{t>0\}}$ as $\varepsilon\downarrow0$ for every real $t$, the value at $t=0$ being $0$ on both sides. [F12, F13, F14, given]

2.1 The chain rule on a relatively compact piece. Let $U\subseteq\Omega$ be open with $\overline U$ compact and $\overline U\subseteq\Omega$, and let $w\in W^{1,p}(U;\mathbb R)$. Fix $k\ge1$ and put $\varepsilon:=1/k$, $u_k:=P_\varepsilon\circ w$ and $v_k:=P_\varepsilon'(w)\,D_iw$. By step 1.2 the pointwise bounds $|P_\varepsilon(w)|\le|w|$ and $|P_\varepsilon'(w)|\le1$ hold, so $u_k\in L^p(U)$ and $v_k\in L^p(U)$ by [F10], [F11] and [F17] for finite $p$ and by [F19] and [F20] for $p=\infty$. Since $P_\varepsilon\in C^1(\mathbb R)$ has bounded derivative, clause 2 of [F4] applied on $U$ to the class $w$ gives $u_k\in W^{1,p}(U)$, and clause 1 gives $D_iu_k=v_k$ almost everywhere on $U$ for every $i$. [F4, F10, F11, F17, F19, F20, step 1.2, given]

2.2 Limits along $\varepsilon_k=1/k$. On the same $U$, step 1.2 gives $|u_k-w^+|\le\varepsilon_k/2$ pointwise, so $u_k\to w^+$ in $L^p(U)$: for $p<\infty$, [F10] and [F11] give $\int_U|u_k-w^+|^p\le(\varepsilon_k/2)^p\int_U1$, and $\int_U1<\infty$ because $U$ is bounded, hence of finite measure, by [F9] with the constant function converted by [F8]; for $p=\infty$, [F20] gives $\|u_k-w^+\|_\infty\le\varepsilon_k/2$. Also $v_k\to v:=1_{\{w>0\}}D_iw$ in $L^q(U)$, where $q:=p$ for $p<\infty$ and $q:=1$ for $p=\infty$: by step 1.2, $P_{\varepsilon_k}'(w)\to1_{\{w>0\}}$ pointwise, so $v_k\to v$ pointwise and $|v_k-v|\le2|D_iw|$; and $(2|D_iw|)^q$ is integrable on $U$, by [F10] and [F11] from $\int_U|D_iw|^p<\infty$ when $p<\infty$, and by [F20] together with $\lambda(U)<\infty$ when $p=\infty$ (in which case $D_iw\in L^1(U)$ by [F8]). Hence [F6] applied to the functions $|v_k-v|^q$ gives $\int_U|v_k-v|^q\to0$. The class $v$ is well defined by [F18] and [F23]. [F6, F8, F9, F10, F11, F18, F20, F23, step 1.2, given]

3.1 Weak stability and membership. The hypotheses of [F5] hold on $U$ with exponents $p$ and $q$, sequences $(u_k)$ and $(v_k)$, limits $w^+$ and $v$, and $\alpha=e_i$: all four classes lie in the required local $L^p$ and $L^q$ spaces with $|v_k|,|v|\le|D_iw|$, the two convergences are those of step 2.2, and each $v_k$ is a weak derivative of $u_k$ by step 2.1. Hence $D_iw^+=v$ weakly on $U$. Moreover $w^+\in L^p(U)$ because $|w^+|\le|w|$, and $v\in L^p(U)$ because $|v|\le|D_iw|$, both by [F10], [F11] and [F17] for finite $p$ and by [F19], [F20] for $p=\infty$; so [F1] gives $w^+\in W^{1,p}(U)$ with $D_iw^+=v$ almost everywhere on $U$. [F1, F5, F10, F11, F17, F19, F20, step 2.1, step 2.2, given]

3.2 Truncation inputs on a relatively compact piece. Fix $U$ as in step 2.1. By [F9] $\lambda(U)<\infty$, so the constant function $M$ lies in $L^p(U)$ by [F8] (trivially for $p=\infty$), and its classical derivative $0$ is its weak derivative on $U$ by [F7]. By [F1] and [F3], $u|_U\in W^{1,p}(U)$ with $D_i(u|_U)=(D_iu)|_U$; hence the classes $u-M$ and $-M-u$ lie in $W^{1,p}(U)$ and satisfy $D_i(u-M)=(D_iu)|_U$ and $D_i(-M-u)=-(D_iu)|_U$ weakly on $U$ by [F3]; since $U$ was arbitrary, $u-M$ and $-M-u$ lie in $W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_i(u-M)=D_iu$ and $D_i(-M-u)=-D_iu$ weakly on $\Omega$. [F1, F3, F7, F8, F9, step 2.1, given]

4.1 Local form. Every class $w\in W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb R)$ has $w|_U\in W^{1,p}(U)$ for every $U$ as in step 2.1 by [F1], so step 2.1, step 2.2 and step 3.1 apply to $w|_U$ and, $U$ being arbitrary, yield $w^+\in W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_iw^+=1_{\{w>0\}}D_iw$ almost everywhere on $\Omega$. If in addition $w\in W^{1,p}(\Omega)$, then $|w^+|\le|w|\in L^p(\Omega)$ and $|1_{\{w>0\}}D_iw|\le|D_iw|\in L^p(\Omega)$, so [F1] upgrades the membership to $w^+\in W^{1,p}(\Omega)$ with the same derivative class. [F1, F10, F20, step 2.1, step 2.2, step 3.1, given]

5.1 Negative part, absolute value and the level set. The class $-u$ lies in $W^{1,p}(\Omega)$ with $D_i(-u)=-D_iu$ by [F3]. Applying step 4.1 to $w:=u$ and to $w:=-u$ gives $u^+,u^-\in W^{1,p}(\Omega)$ with $D_iu^+=1_{\{u>0\}}D_iu$ and $D_iu^-=1_{\{-u>0\}}D_i(-u)=-1_{\{u<0\}}D_iu$ almost everywhere on $\Omega$. By [F2], $|u|=u^++u^-$ and $u=u^+-u^-$ pointwise, and both identities hold as classes; $|u|\in L^p(\Omega)$ because $|\,|u|\,|=|u|$, so [F1] and [F3] give $|u|\in W^{1,p}(\Omega)$ with $D_i|u|=D_iu^++D_iu^-=(1_{\{u>0\}}-1_{\{u<0\}})D_iu=\operatorname{sgn}(u)D_iu$ almost everywhere, and $D_iu=D_iu^+-D_iu^-=(1_{\{u>0\}}+1_{\{u<0\}})D_iu=(1-1_{\{u=0\}})D_iu$ almost everywhere, that is, $1_{\{u=0\}}D_iu=0$ almost everywhere on $\Omega$; the same argument applies verbatim to every class of $W^{1,p}_{\mathrm{loc}}(\Omega)$, with all identities holding almost everywhere on $\Omega$ and membership in $W^{1,p}_{\mathrm{loc}}(\Omega)$. [F1, F2, F3, step 4.1, given]

6.1 Truncation. By step 3.2 the classes $w_1:=u-M$ and $w_2:=-M-u$ lie in $W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_iw_1=D_iu$ and $D_iw_2=-D_iu$ weakly on $\Omega$, so step 4.1 applied to them gives $w_1^+=(u-M)^+,w_2^+=(-M-u)^+\in W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_i(u-M)^+=1_{\{u>M\}}D_iu$ and $D_i(-M-u)^+=-1_{\{u<-M\}}D_iu$ almost everywhere on $\Omega$; the level-set argument of step 5.1 applied to $w_1$ and $w_2$ gives $1_{\{u=M\}}D_iu=0$ and $1_{\{u=-M\}}D_iu=0$ almost everywhere on $\Omega$. By [F2], $T_Mu=u-(u-M)^++(-M-u)^+$ pointwise, so by [F3] $T_Mu\in W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_iT_Mu=(D_iu)-1_{\{u>M\}}D_iu-1_{\{u<-M\}}D_iu=1_{\{-M\le u\le M\}}D_iu$ almost everywhere on $\Omega$; since $1_{\{-M\le u\le M\}}-1_{\{|u|<M\}}=1_{\{|u|=M\}}$ and $\{|u|=M\}=\{u=M\}\cup\{u=-M\}$, the two level-set identities turn this into $D_iT_Mu=1_{\{|u|<M\}}D_iu$ almost everywhere on $\Omega$. [F2, F3, step 3.2, step 4.1, step 5.1, given]

7.1 Global membership, cases and accounting. The pointwise bound $|T_Mu|\le|u|$ holds by the case check $u\le-M$, $-M\le u\le M$, $u\ge M$, and $|1_{\{|u|<M\}}D_iu|\le|D_iu|$; hence $T_Mu\in L^p(\Omega)$ and $1_{\{|u|<M\}}D_iu\in L^p(\Omega)$ by [F10] and [F11] for finite $p$ and by [F19], [F20] for $p=\infty$, and [F1] with the identity of step 6.1 gives $T_Mu\in W^{1,p}(\Omega)$ with $D_iT_Mu=1_{\{|u|<M\}}D_iu$ almost everywhere on $\Omega$. Together with step 5.1 this proves every membership and derivative assertion. For $M=0$, [F2] gives $T_0u=u-u^++(-u)^+=u-u^++u^-=0$, and the derivative formula reads $0=0$. The exponents $p=1$ and $p=\infty$ were included, with $q=p$ for finite $p$ and $q=1$ for $p=\infty$, and the case $n=1$ needs no change. If $\Omega=\varnothing$, the only class is the zero class and all assertions hold vacuously by [F1]. The only selection made is that of finitely many representatives, and the approximation uses the single sequence $\varepsilon_k=1/k$, so the Axiom of Choice is used exactly through [F15] and the stated hypotheses of [F3], [F4], [F5], [F7], [F9] and [F23]. $\square$ [F1, F2, F3, F4, F5, F10, F11, F15, F19, F20, F23, step 5.1, step 6.1, given]
