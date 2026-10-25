---
id: alg-safeguarded-hybrid-event-location-and-restart
kind: algorithm
title: "Safeguarded certified event location and mode restart"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-hybrid-mode-guard-reset-system
  - def-certified-hybrid-event-enclosure
  - def-heun-quadratic-dense-output
  - alg-smooth-function-root-isolation
  - lem-transverse-hybrid-event-time-error
  - lem-reset-error-after-a-mistimed-hybrid-event
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§6.2 and 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
---

## Definition

**Inputs.** A smooth hybrid ODE system with a fixed total event-priority order; an initial mode, time $t_0$, and state; a finite bound $E_0\ge0$ on the discrepancy between that state and the exact reference state at $t_0$ (take $E_0=0$ when the reference trajectory starts from the supplied state); a finite horizon $T\ge t_0$; a finite trial-step provider; a finite enclosure provider satisfying [[def-certified-hybrid-event-enclosure]] for every accumulated mode prefix; a physical-time root-box width target $\omega>0$; a separate guard-residual tolerance $\epsilon>0$; and finite nonnegative integer limits $B_{\mathrm{step}},B_{\mathrm{root}},B_{\mathrm{event}}$. All scalar certificate data used in decisions have finite exact rational representations, including $E_0,\omega,\epsilon,\delta$ and the error, Lipschitz, and field bounds. Time values have finite exact representations. Each provider or certificate-validation call returns data or a failure status in finite time; all computations and comparisons use exact rational or certified outward interval arithmetic, and any comparison that cannot be certified returns `inconclusive`. The trial provider returns a finite interval $J=[a,b]$ with exact finite endpoints and positive rational duration $b-a$ with $a$ equal to the current reported time and $a<b\le T$. For each trial interval use $\theta=(t-a)/(b-a)$ and the transformed guard $\widetilde h_{mn}(\theta)=g_{mn}(a+(b-a)\theta,y_{\rm ref}(a+(b-a)\theta))$. The root isolator then starts from the finite dyadic interval $[0,1]$, regardless of the physical-time endpoints. For $Q\subseteq[0,1]$, write $J(Q)=[a+(b-a)\inf Q,a+(b-a)\sup Q]$. $B_{\mathrm{root}}$ is the maximum number of root-isolator boxes processed for one guard on one trial interval, summed over initial isolation, root-box refinement, endpoint checks, and event-order refinement. The enclosure provider supplies justified local and total reference-error bounds, valid dense-guard, exact-guard, and exact-guard-derivative enclosures on every queried subinterval, and a certified positive separation bound $\delta$ between consecutive selected exact event times on the horizon. It may use a rational residual-tube checker as one provider branch; no particular checker is required. A common-root certificate is a finite proof object with a finite sound validation procedure; it is admissible only when validated to certify that the unique exact roots in all named physical-time boxes occur at one common time. A certified exact singleton root is one such certificate. The error ledger $E$ is an upper bound on discrepancy between reported and reference states at the aligned mode-segment start. The provider accumulates a continuous piecewise-$C^1$ reconstruction $U$ from the last reported reset. The formula in [[def-heun-quadratic-dense-output]] is one possible reconstruction, not an error certificate.

**Procedure.** Before any root-isolator call or further root-box work, if its per-guard counter equals $B_{\rm root}$, return `budget-exhausted` with the certified prefix. After a call, if unresolved boxes remain and that counter has reached $B_{\rm root}$, return `budget-exhausted`; if unresolved boxes remain with budget available, return `inconclusive` unless the refinement procedure below explicitly continues them. A completed certificate may be used even when its last call exactly spends the budget. These budget checks take precedence over the unresolved-result branches below.

1. Initialize the current reported time, mode, and state from the inputs; set the accepted-event count and trial-step count to zero; set $E=E_0$. If the current time is $T$, return the completed prefix. If the trial-step budget is exhausted before reaching $T$, return `budget-exhausted` with the certified prefix. Check the event budget only after a next enabled event has been certified, so it does not prevent a no-event step from reaching $T$.

2. Increment the trial-step count and request the next interval $J=[a,b]$. If the increment exceeds $B_{\rm step}$, return `budget-exhausted`. If $a$ is not the current reported time or $a<b\le T$ fails, return `inconclusive`. Extend $U$ by the proposed panel. Obtain and validate the provider's data for the whole accumulated prefix, including a $C^1$ reference-mode continuation on an open interval containing $J$, the total bound $\eta_{\rm ref}$, and each active guard's interval evaluators. Continue only on a `certified` response under [[def-certified-hybrid-event-enclosure]]; if the provider returns `inconclusive` or any required bound, inclusion, reset datum, or evaluator is missing, unjustified, or nonfinite, return `inconclusive` with the certified prefix.

3. For each outgoing transition in its fixed order, initialize a processed-box counter $c_{mn}=0$ and apply [[alg-smooth-function-root-isolation]] to $\widetilde h_{mn}$ on $[0,1]$. On each queried local interval $Q$, use the exact-guard range enclosure $E_{mn}(J(Q))$ and the derivative enclosure $(b-a)D_{mn}(J(Q))$; these enclose $\widetilde h_{mn}(Q)$ and $\widetilde h'_{mn}(Q)$. Set the minimum width to $\eta=\omega/(b-a)$ and the box budget to $B_{\rm root}$. Add the returned processed-box count to $c_{mn}$. If any result is `inconclusive` or contains unresolved boxes, return `inconclusive`. The result is usable only when it is `complete`, so all roots in the physical interval $J$ are covered by excluded or certified boxes.

4. Classify each certified local-time root box $Q$ using $D_{mn}(J(Q))$. If $\sigma_{mn}D_{mn}(J(Q))\subseteq(-\infty,-\nu_Q]$ for some $\nu_Q>0$, record that root as strictly opposite-oriented and nontriggering. If $\sigma_{mn}D_{mn}(J(Q))\subseteq[\nu_Q,\infty)$ for some $\nu_Q>0$, it is an enabled candidate. If neither inclusion is proved and $(b-a)\operatorname{width}(Q)=0$, return `inconclusive`; otherwise call the refinement procedure below with requested physical width $w=(b-a)\operatorname{width}(Q)/2$, then repeat this classification on the returned smaller unique-root box. If further refinement is required after the box budget is spent, return `budget-exhausted`; any other failure to certify a strict sign returns `inconclusive`.

   **Unique-root refinement.** This procedure is called only on a local-time box $Q$ already certified to contain exactly one root and with a positive requested physical width $w$. While $(b-a)\operatorname{width}(Q)>w$, initialize a FIFO worklist with $Q$ and an empty set of certified subboxes. Remove the first local-time interval $I$ from the worklist. If $(b-a)\operatorname{width}(I)=0$, return `inconclusive`; otherwise bisect $I$ at its dyadic midpoint into two closed halves. For each half $K$, call [[alg-smooth-function-root-isolation]] on $K$ with minimum width $\eta_K=\min\{w/(b-a),\operatorname{width}(K)/2\}$ and the remaining per-guard budget; charge every processed box, including singleton calls, to $c_{mn}$. Add every certified root box returned to the set of certified subboxes, and append every unresolved box returned to the worklist; discard root-free boxes. Any certified subbox lies in $Q$, so the unique root of $Q$ is the root it certifies. If the certified set is nonempty, replace $Q$ by the intersection of its boxes; they all contain the same root, so the intersection is nonempty and contains exactly that root. If the new box is still too wide in physical time, repeat with worklist initialized to this smaller $Q$. If the certified set is empty, continue processing the worklist; root-isolation soundness ensures the root remains in its unresolved union. If $c_{mn}=B_{\rm root}$ while more work is required, return `budget-exhausted`. If the worklist empties without a certified subbox, return `inconclusive`. Closed halves include their shared midpoint, so an endpoint root cannot be dropped; if both halves certify it, their intersection records it once, possibly as a singleton.

5. For each guard, sort its certified local-time root boxes by lower endpoint. Normalize adjacent boxes that share a bisection endpoint $m$ by calling the root isolator on $\{m\}$ for $\widetilde h_{mn}$ with minimum width $\omega/(b-a)$ and the remaining per-guard budget, charging its processed boxes to that guard's counter. If it certifies a root, replace all touching boxes by the singleton root. If it certifies that $m$ is root-free, keep the boxes as distinct roots on opposite sides of $m$. If it is inconclusive, refine the touching boxes using step 4; if more work is required and $c_{mn}=B_{\rm root}$, return `budget-exhausted`; if their relation otherwise remains undecided, return `inconclusive`.

6. If every isolator is complete and every certified root is strictly opposite-oriented, accept the no-event panel. Set the current reported time to $b$ and state to $U(b)$, append the dense panel, and retain the aligned-start ledger $E$. Obtain updated certified local and total error bounds on the enlarged prefix; if the provider does not certify them, return `inconclusive`. A no-event decision is therefore based on complete root isolation and direction classification of the entire trial interval, not on endpoint signs or on the absence of guard roots.

7. If enabled candidates remain, order their local-time root boxes. For boxes that are strictly disjoint, their interval order gives their physical root order. If two boxes meet only at a local-time endpoint $m$, query the root isolator on $\{m\}$ for each guard with minimum width $\omega/(b-a)$ and the remaining budget, charging each call to that guard: two certified singleton roots give a common-root certificate at physical time $a+(b-a)m$ and a priority-selected tie; a singleton root-free result proves that guard's root is strictly to its box's side of $m$ and orders it against a root at $m$ or on the other side. If a singleton result is inconclusive, refine the boxes. For boxes with a nontrivial overlap, use a valid common-root certificate to establish exact simultaneity and apply the fixed priority among those enabled transitions; otherwise refine the overlapping boxes one bisection level at a time by requesting half their physical widths in step 4. If a box has zero physical width and still overlaps another candidate without a certified tie, return `inconclusive`. For same-guard boxes that touch at a bisection endpoint, the singleton check in step 5 either merges one root there or proves that the roots lie strictly on opposite sides. If the order is not certified before a box budget is exhausted, return `budget-exhausted`. Select the earliest enabled root or the priority-selected transition at a certified tie. Refine its box to physical width at most $\omega$.

8. Let $\widehat\tau=a+(b-a)\sup Q$ be the physical upper endpoint of the selected local-time box $Q$, so the exact root $\tau$ satisfies $\tau\le\widehat\tau$. From the dense-guard enclosure $G^U_{mn}(\{\widehat\tau\})$, take the maximum absolute endpoint as a certified upper bound $\epsilon_{\rm obs}$ for $|g_{mn}(\widehat\tau,U(\widehat\tau))|$. If the enclosure is nonfinite or $\epsilon_{\rm obs}>\epsilon$, return `inconclusive` when $(b-a)\operatorname{width}(Q)=0$; otherwise call unique-root refinement with requested physical width $w=(b-a)\operatorname{width}(Q)/2$ and recompute. If the tolerance still requires root-box work after the budget is spent, return `budget-exhausted`; any other failure to certify it returns `inconclusive`.

9. If the accepted-event count is already $B_{\rm event}$, return `budget-exhausted` with the certified prefix without applying another reset. Otherwise let $\nu>0$ be the certified signed derivative margin on the selected physical-time root box. If that box is a singleton, its certified root is $\tau=\widehat\tau$; set $\Delta=0$. For a positive-length box, compute $\Delta=(L_g\eta_{\rm ref}+\epsilon_{\rm obs})/\nu$ by [[lem-transverse-hybrid-event-time-error]]. In both cases the selected box contains its unique exact root $\tau$, and step 8 selects its upper endpoint, so $0\le\widehat\tau-\tau\le\Delta$. If the certified separation bound is missing or $\Delta\ge\delta/3$, return `inconclusive` without restarting, since another selected exact event may occur before the reported time. Otherwise, separation by $\delta$ ensures no next selected exact event occurs before $\widehat\tau$. Check that $(\widehat\tau,U(\widehat\tau))$ lies in the reset domain and that $(\widehat\tau,x^+)\in D_n$, where $x^+$ is the actual proposed exact or approximate reset value and $n$ is the selected target mode; a failed check returns `domain-failure`. Apply the exact reset and set $\epsilon_R=0$, or obtain a finite certified error bound $\varepsilon_R\ge0$ between the applied approximate reset value and $R(\widehat\tau,U(\widehat\tau))$; if that bound is unavailable, return `inconclusive`. A root at $T$ is processed by this same rule, and the output at $T$ is post-reset. The exact reference trajectory has reset at $\tau$ and followed the outgoing field through the alignment time $\widehat\tau$; its flow over this lag contributes at most $M^+\Delta$. By [[lem-reset-error-after-a-mistimed-hybrid-event]], then add the reported reset-evaluation error to set the next aligned-segment state-error bound to
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta+\varepsilon_R.$$
Then discard the pre-reset reconstruction, set the current reported time and state to $\widehat\tau$ and the applied reset value, start a new accumulated reconstruction in the selected mode, append the event certificate, and increment the accepted-event count. Before processing any later trial interval, step 2 must obtain certified provider data whose total reference-error bound is valid on that whole accumulated prefix and includes this aligned-start discrepancy (or is independently justified on that full prefix); if the provider cannot certify it, return `inconclusive` with the certified prefix. Continue from step 1. Whenever further step, root-box, or event work is required after its budget is spent, return `budget-exhausted` with the certified prefix.

**Outputs.** A finite list of certified no-event panels and transverse event boxes with selected transitions, reset states, event-time bounds, and an updated state-error ledger; or an explicit `inconclusive`, `domain-failure`, or `budget-exhausted` status with the certified prefix. No no-event conclusion is drawn from endpoint signs alone.


## Remarks

The diagram separates guard classification, certified event ordering, and restart. It shows the successful event branch, not a replacement for the certificate and budget checks in the procedure. For each outgoing transition $(m,n)$, roots satisfy $g_{mn}(t,y_{\rm ref}(t))=0$. Step 4 retains a root only when $\sigma_{mn}D_{mn}(J(Q))\subseteq[\nu_Q,\infty)$ with $\nu_Q>0$; a strictly negative signed derivative makes it nontriggering. Step 7 selects the earliest enabled root, using priority only for a certified common-time tie. If complete isolation leaves no enabled roots, step 6 instead advances to $b$ with state $U(b)$ and retains $E$. The statuses `inconclusive`, `domain-failure`, and `budget-exhausted` are exits with the certified prefix, not mode transitions.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}, box/.style={draw,rounded corners,align=center,minimum height=1cm,text width=2.8cm}]
\node[box] (m) at (0,0) {Mode $m$\\trial $J=[a,b]$};
\node[box] (roots) at (4,0) {Isolate guard roots\\classify orientation};
\node[box] (select) at (8,0) {Earliest enabled root\\certified ties: priority};
\node[box] (reset) at (8,-2) {Validate lag and domains\\apply reset at $\widehat\tau$};
\node[box] (n) at (4,-2) {Restart in mode $n$\\new ledger $E$};
\draw[->] (m) -- (roots);
\draw[->] (roots) -- (select);
\draw[->] (select) -- (reset);
\draw[->] (reset) -- (n);
\node at (4,-3.3) {Selected physical root box $J(Q)$};
\draw[->] (-1,-4.2) -- (9.5,-4.2) node[right] {$t$};
\draw[line width=1.2pt] (3,-4.2) -- (6,-4.2);
\draw (3,-4.05) -- (3,-4.35);
\draw (6,-4.05) -- (6,-4.35);
\fill (4.2,-4.2) circle (2pt);
\node[below] at (-0.5,-4.3) {$a$};
\draw (-0.5,-4.05) -- (-0.5,-4.35);
\node[below] at (4.2,-4.3) {$\tau$};
\node[below] at (6,-4.3) {$\widehat\tau=\sup J(Q)$};
\node[below] at (9,-4.3) {$b$};
\draw (9,-4.05) -- (9,-4.35);
\node at (4,-5.5) {$0\le\widehat\tau-\tau\le\Delta<\delta/3$};
\end{tikzpicture}
```

The time strip depicts a positive-length selected box with an interior exact root; singleton roots have $\tau=\widehat\tau$ and $\Delta=0$. The successful reset branch requires the tests in steps 8–9. For the selected transition, $R_{mn}:U_{mn}\to\mathbb R^d$ is evaluated at $(\widehat\tau,U(\widehat\tau))\in U_{mn}$, and the applied reset state $x^+$ must satisfy $(\widehat\tau,x^+)\in D_n$. The next ledger is exactly the bound in step 9,
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta+\varepsilon_R.$$
The arrow to mode $n$ represents the reported restart at the upper endpoint, while the exact reference trajectory resets at $\tau$ and flows to the common alignment time $\widehat\tau$. The procedure and its certificate requirements remain independent of the illustration.
