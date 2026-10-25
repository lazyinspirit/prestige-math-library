## Online and Reinforcement Learning

Completed visual review of **265 items across 42 pages**, with **449 image tiles**. Findings: 6 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/category-review-receipt.json).

### Confirmed rendering defects

#### online-and-reinforcement-learning / confirmed 001: `ex-model-accurate-on-behavior-support`

- Location: **Example**; source lines 35, 36, 37, 38, 39, 40, 41, 42, 43.
- Pages: `model-based-planning-dyna-and-model-exploitation-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Fence the existing complete tikzpicture block with the renderer-supported ```tikz marker (or convert to its supported diagram syntax); then check that the generated diagram preserves s→g action a with reward 1, g self-loop d with reward 0, and s self-loop b annotated true reward 0 / learned reward 1.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-model-accurate-on-behavior-support--01.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/ex-model-accurate-on-behavior-support.md).

Exact frozen source lines:

```text
35: \begin{center}
36: \begin{tikzpicture}[>=stealth, node distance=32mm]
37:   \node[circle,draw] (s) {$s$};
38:   \node[circle,draw,right of=s] (g) {$g$};
39:   \draw[->] (s) to[bend left=12] node[above] {$a:1$} (g);
40:   \draw[->] (g) to[loop right] node[right] {$d:0$} (g);
41:   \draw[->] (s) to[loop left] node[left] {$b:0\ (\widehat b:1)$} (s);
42: \end{tikzpicture}
43: \end{center}
```

#### online-and-reinforcement-learning / confirmed 002: `ex-finite-mdp-common-reward-shift`

- Location: **Remarks**; source lines 79, 80, 81, 82.
- Pages: `finite-mdps-and-bellman-operators-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Move forward choice labels toward the state ends and return-mass labels farther along the curved return arcs, or abbreviate the joint masses; preserve circles for state s, action rectangles a/b, and the two probability-one return edges with rewards 1 and 3.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-finite-mdp-common-reward-shift--01.png), [tile 02](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-finite-mdp-common-reward-shift--02.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/ex-finite-mdp-common-reward-shift.md).

Exact frozen source lines:

```text
79:   \draw[->] (s) -- node[above left] {choose $a$} (a);
80:   \draw[->] (a) to[bend left=22] node[left] {$p(s,1\mid s,a)=1$} (s);
81:   \draw[->] (s) -- node[above right] {choose $b$} (b);
82:   \draw[->] (b) to[bend right=22] node[right] {$p(s,3\mid s,b)=1$} (s);
```

#### online-and-reinforcement-learning / confirmed 003: `ex-model-exploitation-off-support`

- Location: **Example diagram**; source lines 33, 35, 36, 37, 38, 39, 40, 41.
- Pages: `model-based-planning-dyna-and-model-exploitation-examples`.
- Visible defect: The local HTML and screenshot print the literal center/TikZ commands as prose. The state-transition diagram is absent from the rendered ItemBody.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-model-exploitation-off-support--01.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/ex-model-exploitation-off-support.md).

Exact frozen source lines:

```text
33: The diagram uses a vertex for the state and a loop for each deterministic self-transition; each loop label gives the action and its true/learned immediate rewards.
35: \begin{center}
36: \begin{tikzpicture}[>=stealth]
37:   \node[circle,draw] (s) at (0,0) {$s$};
38:   \draw[->] (s) to[loop above] node[above] {$a_{\mathrm{safe}}: 1/2,\ \widehat r=1/2$} (s);
39:   \draw[->] (s) to[loop below] node[below] {$a_{\mathrm{off}}: 0,\ \widehat r=1$} (s);
40: \end{tikzpicture}
41: \end{center}
```

#### online-and-reinforcement-learning / confirmed 004: `ex-short-versus-long-model-rollouts`

- Location: **Example diagram**; source lines 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51.
- Pages: `model-based-planning-dyna-and-model-exploitation-examples`.
- Visible defect: The local HTML and screenshot print the literal center/TikZ commands as prose. The true-versus-learned transition diagram is absent from the rendered ItemBody.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-short-versus-long-model-rollouts--01.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/ex-short-versus-long-model-rollouts.md).

Exact frozen source lines:

```text
33: The diagram compares the true transition model on the left with the learned transition model on the right. Nodes are states, and arrows carry transition probabilities; each state label gives its reward. The dashed arrow is present only in the learned model.
35: \begin{center}
36: \begin{tikzpicture}[>=stealth, node distance=25mm]
37:   \node[circle,draw] (u1) {$u,\ r=1$};
38:   \node[circle,draw,right of=u1] (v1) {$v,\ r=0$};
39:   \draw[->] (u1) to[loop above] node[above] {$1$} (u1);
40:   \draw[->] (v1) to[loop right] node[right] {$1$} (v1);
41:   \node at (1.25,-0.8) {true};
42:   \begin{scope}[xshift=7cm]
43:     \node[circle,draw] (u2) at (0,0) {$u,\ r=1$};
44:     \node[circle,draw] (v2) at (2.8,0) {$v,\ r=0$};
45:     \draw[->] (u2) to[loop above] node[above] {$1-\epsilon$} (u2);
46:     \draw[->,dashed] (u2) to[bend left=12] node[above] {$\epsilon$} (v2);
47:     \draw[->] (v2) to[loop right] node[right] {$1$} (v2);
48:     \node at (1.4,-0.8) {learned};
49:   \end{scope}
50: \end{tikzpicture}
51: \end{center}
```

#### online-and-reinforcement-learning / confirmed 005: `cex-rtdp-optimal-relevant-state-convergence-fails`

- Location: **Counterexample**; source lines 58, 73.
- Pages: `model-based-planning-dyna-and-model-exploitation`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/cex-rtdp-optimal-relevant-state-convergence-fails--01.png), [tile 02](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/cex-rtdp-optimal-relevant-state-convergence-fails--02.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/cex-rtdp-optimal-relevant-state-convergence-fails.md).

Exact frozen source lines:

```text
58: \begin{center}
73: \end{center}
```

#### online-and-reinforcement-learning / confirmed 006: `ex-policy-iteration-tie-retention`

- Location: **Remarks**; source lines 79, 89.
- Pages: `finite-mdps-and-bellman-operators-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-policy-iteration-tie-retention--01.png), [tile 02](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/screenshots/ex-policy-iteration-tie-retention--02.png); [frozen source](math-library-rendering-audit-2026-10-23/online-and-reinforcement-learning/snapshots/ex-policy-iteration-tie-retention.md).

Exact frozen source lines:

```text
79: ```tikz
89: ```
```

