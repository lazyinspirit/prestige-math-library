---
id: lem-hone-functional-has-compatible-local-ltwo-representatives
kind: lemma
title: "Bounded H1 functionals have compatible local L2 representatives"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone, thm-riesz-representation-for-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-multidimensional-rectangle-and-volume, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, cor-cauchy-schwarz-inequality-for-l-two, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 7.40(b), construction of $F^Q$ and the subsequent gluing, printed pp. 47-48"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 20"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture20.pdf"
      locator: "the reverse inclusion and its Riesz-representation step, scanned pages 1-3"
---

## Statement

Assume Countable Choice and fix the kernel $\varphi$ and auxiliary order
$\widetilde N$ of [[lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone]].
Let $\Lambda\in(H^1(\mathbb R^n))^*$ and let
$L^2_0(Q)$ be the closed subspace of $L^2(\mathbb R^n)$ of functions supported
in the cube $Q$ with $\int_Qf=0$ (equivalently, mean $0$ when $|Q|>0$).
For every cube $Q$ there is a unique
$u_Q\in L^2_0(Q)$ with $\Lambda(f)=\int_Qu_Qf$ for every $f\in L^2_0(Q)$;
moreover $Q\subseteq R$ implies that $u_Q-u_R$ is almost everywhere constant
on $Q$. Consequently there are a locally integrable function $u$ on
$\mathbb R^n$, unique up to additive constants, and for every cube $Q$ a
constant $c_Q$ with $u-u_Q=c_Q$ almost everywhere on $Q$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded linear functional $\Lambda\in(H^1(\mathbb R^n))^*$ and cubes $Q\subseteq R$, with the complex $L^2$ space and its integral pairing of [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] and [[def-l-p-space-as-a-quotient-by-null-functions]].

[F1] For every cube $Q$ and every $f\in L^2(\mathbb R^n)$ with $\operatorname{supp}f\subseteq Q$ and $\int_Qf=0$ one has $\|f\|_{H^1}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|f\|_{L^2}$ for the fixed kernel and order of ([[lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone]]).

[F2] On complex $L^2(\mathbb R^n)$ the form $\langle f,g\rangle=\int f\overline g$ is a Hilbert-space inner product, and Riesz representation holds: for every bounded linear functional $\lambda$ on a closed subspace $H_0$ there is a unique $y\in H_0$ with $\lambda(f)=\langle f,y\rangle$ for all $f\in H_0$ and $\|\lambda\|=\|y\|$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-riesz-representation-for-hilbert-space]]).

[F4] Cauchy-Schwarz gives $|\int_Qf|\le|Q|^{1/2}\|f\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F3] A countable union of Lebesgue-null sets is Lebesgue-null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]), and [[def-multidimensional-rectangle-and-volume]] supplies the cube conventions of the chain $Q_k=[-k,k]^n$ below.

## Proof

**Proof technique:** direct.

1.1 For a cube $Q$, the set $L^2_0(Q)$ is the kernel of the continuous linear functional $f\mapsto\int_Qf$ on the closed subspace $\{f\in L^2:\ f=0\text{ a.e. off }Q\}$ (closedness follows from $\|f\mathbf 1_{Q^c}\|_2\le\|f-f_m\|_2$ for a supported approximating sequence $f_m$, and continuity of the integral from [F4]), hence a closed subspace of the Hilbert space $L^2(\mathbb R^n)$; and for $f\in L^2_0(Q)$ the boundedness of $\Lambda$ and [F1] give $|\Lambda(f)|\le\|\Lambda\|\,\|f\|_{H^1}\le C_{n,\widetilde N,\varphi}|Q|^{1/2}\|\Lambda\|\,\|f\|_{L^2}$, so $\Lambda|_{L^2_0(Q)}$ is bounded for the $L^2$ norm. [F1, F2, F4]

2.1 By [F2] applied to the closed subspace $L^2_0(Q)$ and the bounded functional $\Lambda|_{L^2_0(Q)}$, there is a unique $y_Q\in L^2_0(Q)$ with $\Lambda(f)=\langle f,y_Q\rangle$ for $f\in L^2_0(Q)$; setting $u_Q:=\overline{y_Q}$, which still lies in $L^2_0(Q)$ because conjugation preserves supports and means, gives $\Lambda(f)=\int_Qu_Qf$ for every $f\in L^2_0(Q)$, and $u_Q$ is unique with this property. [step 1.1, F2]

3.1 Nested compatibility. If $|Q|=0$, then $L^2_0(Q)=\{0\}$ as an almost-everywhere quotient, and constancy almost everywhere on $Q$ is vacuous. Assume now $|Q|>0$. If $Q\subseteq R$ then $L^2_0(Q)\subseteq L^2_0(R)$, and for $f\in L^2_0(Q)$ step 2.1 gives $\int_Qu_Qf=\Lambda(f)=\int_Ru_Rf=\int_Qu_Rf$. Put $h:=u_Q-u_R$ and apply this identity with $f:=\overline{h-\operatorname{mean}_Q(h)}\mathbf 1_Q$, which belongs to $L^2_0(Q)$. Then $\int_Q|h-\operatorname{mean}_Q(h)|^2=0$, so $u_Q-u_R$ equals the constant $\operatorname{mean}_Q(u_Q-u_R)$ almost everywhere on $Q$. [step 2.1, F2]

4.1 Gluing. Let $Q_k=[-k,k]^n$ for $k\ge1$ and use Countable Choice to select measurable representatives of their $u_{Q_k}$. By step 3.1 the difference $(u_{Q_{k+1}}-u_{Q_k})$ is almost everywhere constant $a_k$ on $Q_k$; define $c_1:=0$ and $c_{k+1}:=c_k-a_k$, so that $u_{Q_{k+1}}+c_{k+1}=u_{Q_k}+c_k$ almost everywhere on $Q_k$. Removing the countable union of the exceptional null sets, which is null by [F3], define $u(x):=u_{Q_k}(x)+c_k$ for $x\in Q_k$ outside that null set, and set $u=0$ on the null set; this is well defined, locally integrable, and for every cube $Q$, choosing $k$ with $Q\subseteq Q_k$, the function $u-u_Q=[u-(u_{Q_k}+c_k)]+[(u_{Q_k}+c_k)-u_Q]$ is almost everywhere constant on $Q$ by the construction and step 3.1. If $u'$ is another such function, then on each $Q_k$ the difference $u-u'$ is constant almost everywhere, and the constants agree on the positive-measure overlap $Q_k\cap Q_{k+1}=Q_k$, so $u-u'$ is almost everywhere equal to a single constant on $\bigcup_kQ_k=\mathbb R^n$: uniqueness up to additive constants. [step 3.1, F3]

5.1 Steps 2.1, 3.1 and 4.1 prove the existence and uniqueness of each $u_Q$, the nested constancy, and the existence of the global representative $u$ with constants $c_Q$, which is the statement. Countable Choice is used for the countably many representations and the countable union in step 4.1. [step 2.1, step 3.1, step 4.1] ∎ 
