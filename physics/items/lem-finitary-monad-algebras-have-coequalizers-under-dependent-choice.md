---
id: lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice
kind: lemma
title: "Under dependent choice, algebras for a finitary monad on a complete cocomplete locally small category have coequalizers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finitary-functor-and-finitary-monad, def-dependent-choice, def-eilenberg-moore-category, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, thm-general-adjoint-functor-theorem-objectwise-form, def-the-solution-set-condition, def-equalizers-and-coequalizers, def-small-locally-small-and-large-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., proof of Theorem 5.6.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume dependent choice. If $T$ is a finitary monad on a complete, cocomplete, locally small category $\mathcal C$, then the Eilenberg–Moore category $\mathcal C^T$ has coequalizers.

## Facts & Assumptions

**Given:** Dependent choice, a complete cocomplete locally small category $\mathcal C$, a finitary monad $T$, and algebra homomorphisms $f,g:(A,a)\rightrightarrows(B,b)$.

[L1] A functor is finitary when it preserves every small filtered colimit ([[def-finitary-functor-and-finitary-monad]]).

[L2] Dependent choice produces a sequence from a nonempty set with an entire successor relation and a specified starting point ([[def-dependent-choice]]).

[L3] Let $V:\mathcal A\to\mathcal B$ have complete locally small domain and be continuous. If $V$ satisfies the solution-set condition at $B\in\mathcal B$, then $(B\downarrow V)$ has an initial object, equivalently a universal arrow from $B$ to $V$ ([[thm-general-adjoint-functor-theorem-objectwise-form]]).

[L4] The Eilenberg–Moore forgetful functor strictly creates every limit existing in the base ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits]]).

[L5] If $\mathcal A$ and the indexing category $\mathcal J$ are small and chosen limits of the pointwise diagrams exist, those choices form a limit in $[\mathcal A,\mathcal C]$ ([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]]).

## Proof

**Proof technique:** direct.

1.1 In $\mathcal C$, form $q_0:B\to Q_0$, the coequalizer of $f,g$, and $p_0:TB\to P_0$, the coequalizer of $Tf,Tg$. Their universal properties induce maps $u_0:P_0\to Q_0$ and $v_0:P_0\to TQ_0$ characterized by $u_0p_0=q_0b$ and $v_0p_0=Tq_0$. Both $p_0$ and $q_0$ are epimorphisms. [given, construct]

1.2 The category $\mathcal C^T$ is complete by [L4] and locally small because its hom-sets are subsets of those of $\mathcal C$. The walking parallel-pair category is finite and hence small. For any small limit diagram, the finitely many pointwise limits can be chosen without a choice axiom, so [L5] makes the parallel-pair functor category complete. The constant-diagram functor is continuous because these limits are pointwise. [L4, L5, construct]

2.1 Suppose $(P_n,Q_n,u_n,v_n,p_n,q_n)$ has been constructed with $u_np_n=q_nb$ and $v_np_n=Tq_n$. Put $P_{n+1}=TQ_n$, and choose $u_{n+1}:TQ_n\to Q_{n+1}$ as a coequalizer of $T(u_n),\mu_{Q_n}T(v_n):TP_n\rightrightarrows TQ_n$. Define $q_{n,n+1}=u_{n+1}\eta_{Q_n}$, $v_{n+1}=Tq_{n,n+1}$, $p_{n+1}=v_np_n$, and $q_{n+1}=q_{n,n+1}q_n$. Naturality of $\eta$ and the monad unit law give $q_{n,n+1}u_n=u_{n+1}\eta_{Q_n}u_n=u_{n+1}v_n$. Consequently $u_{n+1}p_{n+1}=q_{n+1}b$ and $v_{n+1}p_{n+1}=Tq_{n+1}$. [step 1.1, algebra, construct]

2.2 Let $h:(B,b)\to(C,c)$ be any algebra homomorphism with $hf=hg$. Factor it uniquely as $h=k_0q_0$. Precomposing with the epimorphism $p_0$ and using step 1.1 gives $cT(k_0)v_0=k_0u_0$. [step 1.1, construct, algebra]

3.1 To justify the countable sequence of choices in step 2.1, encode each finite stage by a set. For a state $x$, let $S(x)$ be all valid successor codes of least possible von Neumann rank; it is a nonempty subset of some $V_\alpha$, hence a set. Starting with the code from step 1.1, recursively close under $x\mapsto S(x)$ for finitely many steps and take the union over $\mathbb N$. Replacement and union make this closure a set on which the successor relation is entire. Applying [L2] to that set gives one compatible sequence of stages. [step 1.1, step 2.1, L2, choose]

3.2 Suppose $k_n:Q_n\to C$ satisfies $cT(k_n)v_n=k_nu_n$. The algebra law for $c$ shows that $cT(k_n)$ coequalizes $T(u_n)$ and $\mu_{Q_n}T(v_n)$, so it factors uniquely through $u_{n+1}$ as a map $k_{n+1}:Q_{n+1}\to C$ with $k_{n+1}u_{n+1}=cT(k_n)$. The definitions in step 2.1 then give $k_{n+1}q_{n,n+1}=k_n$ and $cT(k_{n+1})v_{n+1}=k_{n+1}u_{n+1}$, closing the induction. [step 2.1, step 2.2, algebra, construct]

4.1 Form the sequential colimits $Q_\omega=\operatorname*{colim}_nQ_n$ and $P_\omega=\operatorname*{colim}_nP_n$, with injections $q_{n,\omega}$ and $p_{n,\omega}$. The identities $q_{n,n+1}u_n=u_{n+1}v_n$ make the $u_n$ a map of the two sequential diagrams, hence induce $u_\omega:P_\omega\to Q_\omega$. The compatible $q_n$ induce $q_\omega:B\to Q_\omega$. The shifted identities $P_{n+1}=TQ_n$ and $v_{n+1}=Tq_{n,n+1}$ identify $P_\omega$ with $\operatorname*{colim}_nTQ_n$. [step 2.1, step 3.1, construct]

5.1 The natural-number indexing category is filtered, so finitarity [L1] identifies the colimit in step 4.1 with $TQ_\omega$. Make this identification, so $P_\omega=TQ_\omega$ and the induced comparison $v_\omega:P_\omega\to TQ_\omega$ is the identity. Thus $u_\omega:TQ_\omega\to Q_\omega$. [step 4.1, L1]

6.1 For every $n$, naturality of $\eta$ and the definition of $q_{n,n+1}$ give $u_\omega\eta_{Q_\omega}q_{n,\omega}=q_{n,\omega}$. The colimit injections are jointly epimorphic, so $u_\omega\eta_{Q_\omega}=1_{Q_\omega}$. [step 2.1, step 5.1, algebra]

6.2 The compatible $k_n$ induce $k:Q_\omega\to C$. Passing the equations $k_{n+1}u_{n+1}=cT(k_n)$ to the colimit gives $ku_\omega=cT(k)$, and compatibility at stage zero gives $kq_\omega=h$. [step 5.1, step 3.2]

7.1 The successor coequalizer equations are $u_{n+1}T(u_n)=u_{n+1}\mu_{Q_n}T(v_n)$. Passing these compatible equations to the filtered colimit gives $u_\omega T(u_\omega)=u_\omega\mu_{Q_\omega}T(v_\omega)=u_\omega\mu_{Q_\omega}$ because $v_\omega=1$ in step 5.1. Together with step 6.1, this makes $(Q_\omega,u_\omega)$ a $T$-algebra. [step 2.1, step 5.1, step 6.1, algebra]

8.1 Passing $u_np_n=q_nb$ and $v_np_n=Tq_n$ to the colimit gives $u_\omega Tq_\omega=q_\omega b$, so $q_\omega$ is an algebra homomorphism; it coequalizes $f,g$ because $q_0$ does. [step 2.1, step 5.1, step 7.1]

9.1 By steps 6.2 and 7.1, $k$ is an algebra homomorphism, and step 6.2 gives $kq_\omega=h$. Therefore the single algebra fork $q_\omega$ is a solution set for the constant-diagram functor $\Delta:\mathcal C^T\to(\mathcal C^T)^{\bullet\rightrightarrows\bullet}$ at the given parallel pair: every algebra fork factors through it, without a uniqueness assertion. [step 8.1, step 6.2, step 7.1, construct]

10.1 Apply [L3] to $\Delta$ using the singleton solution set from step 9.1 and the complete, locally small, and continuity properties proved in step 1.2. The resulting universal arrow is a left adjoint value for $\Delta$, hence a coequalizer of $f,g$ in $\mathcal C^T$. Since the pair was arbitrary, all coequalizers exist. [step 9.1, step 1.2, L3] ∎
