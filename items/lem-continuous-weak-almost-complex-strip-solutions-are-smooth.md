---
id: lem-continuous-weak-almost-complex-strip-solutions-are-smooth
kind: lemma
title: "Smoothness of continuous weak almost complex strip solutions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-countable-choice-lp-regularity-for-small-strip-cauchy-riemann-coefficients, lem-countable-choice-planar-morrey-estimate, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, elliptic regularity"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Let $G$ be a disk or an upper half-disk in $\mathbb R^2$, let $\Omega\subset\mathbb R^{2m}$ be open, and let $J(s,t,x)$ be smooth, including the straight source boundary in the half-disk case, with $J^2=-I$. Let $u:G\to\Omega$ be continuous, belong locally to $W^{1,2}$, and satisfy
$$u_s+J(s,t,u)u_t=0$$
weakly. In the half-disk case assume continuity and local $W^{1,2}$ also up to the straight boundary, $u(s,0)\in\mathbb R^m\subset\mathbb C^m=\mathbb R^{2m}$, and $\mathbb R^m\cap J(s,0,u(s,0))\mathbb R^m=\{0\}$. Then $u$ is smooth locally, including all one-sided derivatives at the straight boundary. Thus a continuous $W^{1,2}$ weak solution in smooth target charts with a flattened totally real boundary has classical smooth regularity. Continuity at a missing puncture is a premise, not a conclusion.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The equation, local continuity and finite Sobolev norm, smooth coefficients, and totally real boundary condition in the statement.

[F1] Under Countable Choice, [[lem-countable-choice-lp-regularity-for-small-strip-cauchy-riemann-coefficients]] gives $W^{1,p}$ regularity and a derivative estimate for compactly supported $W^{1,2}$ solutions of $D_0w=A w_t+f$, with $\|A\|_\infty\le\eta_{m,p}$ and $f\in L^2\cap L^p$. It applies on the half-plane when $w$ is continuous with real boundary values, and applies locally by real cutoffs.

[F2] The actual Countable Choice proofs in [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]] give uniform tangential quotient bounds from a weak tangential derivative, including on half-domains. Conversely, [[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]] turns such bounds into weak derivatives without weak compactness.

[F3] The Countable Choice proof in [[lem-countable-choice-planar-morrey-estimate]] gives local $W^{1,p}\subset C^{0,1-2/p}$ and $W^{2,p}\subset C^{1,1-2/p}$ for $p>2$, including straight boundaries.

## Proof

1.1 Work near one source point $z_0$. A constant real target change makes $J(z_0,u(z_0))=i$. At an interior point choose a real basis $e_1,Je_1,\ldots,e_m,Je_m$ successively in this finite-dimensional complex vector space. At a boundary point take a real basis $e_1,\ldots,e_m$ of the boundary plane; total reality makes $e_1,\ldots,e_m,Je_1,\ldots,Je_m$ a basis, and the change sending these vectors to the standard real and imaginary bases preserves the real boundary plane. Continuity of $u$ and smoothness of $J$ then give a disk or half-disk on which $$A(s,t)=i-J(s,t,u(s,t)),\qquad \|A\|_\infty<\min\{\eta_{m,8},\eta_{m,4}\}.$$ The equation becomes $D_0u=A u_t$. After further shrinking its image is in a compact subset of a convex target coordinate ball. All smooth coefficient derivatives are bounded there. Real cutoffs preserve the boundary condition. [given, construct, algebra]

2.1 We record the weak calculus used below. For a continuous $W^{1,q}$ map, the chain rule $\partial_j H(z,u)=H_{z_j}(z,u)+H_x(z,u)\partial_j u$ holds for a smooth $H$ with bounded derivatives on its localized image. Indeed, on interior compact subsets mollify $u$: uniform convergence follows from continuity, convergence of derivatives holds in $L^q$, and the classical chain rule passes to distributions by boundedness and uniform convergence of the coefficient derivatives. This gives the formula everywhere in the open half-domain too; its bounds extend to the boundary because the formula has an integrable right side on the full half-domain. The product rule follows by the same argument whenever one factor and the relevant lower derivatives are bounded, or by Holder when the two differentiated factors have conjugate product integrability. Higher chain and product formulas follow inductively once the corresponding lower derivatives have these bounds. Difference quotients obey $\delta_s(fg)=f(s+h,t)\delta_s g+(\delta_s f)g$, and [F2] bounds the quotients by the weak derivatives on a slightly larger patch. These arguments use countably many mollifications and no selection of weakly convergent subsequences. [F2, step 1.1, construct, algebra]

3.1 Apply [F1] with $p=8$ to a real-cutoff localization of $u$. Its forcing is $(\chi_s+i\chi_t-A\chi_t)u$, which is bounded and compactly supported because $u$ is continuous. The localized map is already $W^{1,2}$, and is continuous and real on the physical boundary. Thus $u\in W^{1,8}$ on a smaller patch. Step 2.1 implies $A\in W^{1,8}$ there. For each sufficiently small nonzero tangential shift $h$, put $v_h=\delta_su$ and $A_h(s,t)=A(s+h,t)$. Subtracting the equations gives $$D_0v_h=A_h(v_h)_t+(\delta_s A)u_t.$$ The last term has a uniform $L^4$ bound by Holder and [F2], since its factors have uniformly bounded $L^8$ norms. The local $L^4$ norm of $v_h$ is uniformly bounded by the tangential quotient estimate. Each $v_h$ separately is continuous, real on the boundary, and $W^{1,2}$: it is a difference of translates of a $W^{1,8}$ map divided by a fixed nonzero number. Therefore [F1] with $p=4$ and a fixed cutoff gives uniform $L^4$ bounds for $(v_h)_s,(v_h)_t$ on a still smaller patch; all forcing terms, including cutoff terms, lie in $L^4\cap L^2$ by finite support. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Apply the converse in [F2] to $u_s$ and $u_t$, whose tangential quotients are the uniformly bounded derivatives of $v_h$. It follows that $u_{ss},u_{st}\in L^4$. The original equation equivalently says $u_t=J(s,t,u)u_s$, since $J^2=-I$. Differentiate this weakly in $t$ using step 2.1: $$u_{tt}=(J_t+J_xu_t)u_s+J u_{st}.$$ Here $J_t$ denotes its explicit source derivative. Both first derivatives of $u$ are in $L^8$, so the product term lies in $L^4$; the other terms do too. Thus $u\in W^{2,4}$ locally. By [F3], $u$ is now $C^{1,1/2}$ on smaller patches up to the physical boundary, with bounded first derivatives. In particular its classical tangential boundary derivative is real. [F2, F3, step 2.1, step 3.1, algebra]

5.1 Suppose inductively $u\in W^{k,4}$ locally for an integer $k\ge2$. By [F3] applied to its derivatives of order at most $k-2$, all derivatives of order at most $k-1$ have continuous bounded representatives on smaller patches. Repeated use of step 2.1 gives $A\in W^{k,4}$, with all its derivatives of order at most $k-1$ bounded. Put $v=\partial_s^{k-1}u$. Its differentiated equation is $$D_0v=A v_t+G,\qquad G=\sum_{a=1}^{k-1}\binom{k-1}{a}(\partial_s^a A)(\partial_t\partial_s^{k-1-a}u).$$ The function $G$ and its weak $s$ derivative lie in $L^4$: in a differentiated product at most one factor has order $k$, which is $L^4$; every other factor has order at most $k-1$ and is bounded. The same reasoning applies to the chain expansion for $A$, since a term containing a derivative of order $k$ contains it only once. The function $v$ is continuous, belongs to $W^{1,4}$, and has real boundary values, being the tangential derivative of order $k-1$ of a $C^{k-1}$ map whose boundary trace is real. [F3, step 2.1, step 4.1, construct, algebra]

6.1 Take tangential quotients of the last equation: $$D_0(\delta_s v)=A_h\partial_t(\delta_s v)+(\delta_s A)v_t+\delta_sG.$$ The quotient forcing is uniformly $L^4$ on smaller patches: $\delta_sA$ is uniformly bounded by the bounded classical first derivative of $A$, $v_t\in L^4$, and $\delta_sG$ is controlled by $G_s\in L^4$ and [F2]. Also $\delta_s v$ is uniformly $L^4$ by $v_s\in L^4$. For each fixed $h$ it is continuous, real on the boundary, and $W^{1,2}$ on bounded patches, so [F1] and cutoffs give uniform $L^4$ bounds for its first derivatives. The converse in [F2] gives $\partial_s^{k+1}u,\partial_t\partial_s^k u\in L^4$. This supplies the derivatives of total order $k+1$ with zero or one normal derivative. [F1, F2, step 5.1, construct, algebra]

7.1 Recover the other derivatives from $u_t=Ju_s$. For a derivative of total order $k+1$ with $b\ge2$ normal derivatives, apply $\partial_s^{k+1-b}\partial_t^{b-1}$ to this equation. The term in which no derivative hits $J$ is $J\partial_s^{k+2-b}\partial_t^{b-1}u$, already known by induction on $b$. In every other product, derivatives of $u$ have order at most $k$, and differentiated coefficient factors have order at most $k$. If a factor has order $k$, it is the only such factor and all others are bounded; otherwise all factors are bounded. Thus all these terms lie in $L^4$ on a bounded smaller patch. For precision, first differentiate the equation only $k-1$ times, by $\partial_s^{k+1-b}\partial_t^{b-2}$, and then take one more weak $t$ derivative. The highest differentiated $u_s$ factor has a known weak $t$ derivative by the induction on $b$; its coefficient $J$ is $C^1$, so the ordinary first-order weak product rule applies. All other factors have the bounded or $L^4$ derivatives just described. This justifies the displayed expansion without multiplying an undefined high-order distribution by a nonsmooth coefficient, and proves the desired derivative exists in $L^4$. Induction on $b$ proves $u\in W^{k+1,4}$. [step 2.1, step 5.1, step 6.1, algebra]

8.1 Starting with step 4.1, steps 5.1 through 7.1 prove local $W^{k,4}$ for every finite $k$, using nested patches inside the original coordinate neighborhood. To obtain a fixed neighborhood for any specified order, choose its finitely many nested patches between that neighborhood and a larger one; no uniform positive loss after infinitely many inductions is needed. Applying [F3] to each derivative then gives classical derivatives of every order, with their continuous extensions to the straight boundary and the usual tangential boundary derivatives. The given continuous representative agrees with each Sobolev representative. The equation therefore holds classically and $u$ is smooth as asserted. This conclusion requires the initial continuity premise and does not establish it at any puncture. [F3, step 4.1, step 5.1, step 6.1, step 7.1, construct] ∎
